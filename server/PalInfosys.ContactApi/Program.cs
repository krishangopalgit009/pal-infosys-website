using System.Threading.RateLimiting;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.RateLimiting;
using PalInfosys.ContactApi.Contracts;
using PalInfosys.ContactApi.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.WebHost.ConfigureKestrel(options => options.Limits.MaxRequestBodySize = 16 * 1024);
builder.Services.AddProblemDetails();

var trustedProxies = (builder.Configuration.GetSection("ReverseProxy:TrustedProxies").Get<string[]>() ?? [])
    .Select(value => IPAddress.TryParse(value, out var address) ? address : null)
    .Where(address => address is not null)
    .Cast<IPAddress>()
    .ToArray();
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.ForwardLimit = 1;
    options.KnownIPNetworks.Clear();
    options.KnownProxies.Clear();
    foreach (var address in trustedProxies) options.KnownProxies.Add(address);
});

var emailOptions = builder.Configuration.GetSection(EmailOptions.SectionName).Get<EmailOptions>() ?? new EmailOptions();
builder.Services.AddSingleton(emailOptions);
builder.Services.AddSingleton<INotificationSender, SmtpNotificationSender>();

var allowedInterests = builder.Configuration.GetSection("Contact:AllowedInterests").Get<string[]>() ?? [];
var allowedStages = builder.Configuration.GetSection("Contact:AllowedProjectStages").Get<string[]>() ?? [];
builder.Services.AddSingleton(new ContactValidationOptions(
    new HashSet<string>(allowedInterests, StringComparer.Ordinal),
    new HashSet<string>(allowedStages, StringComparer.Ordinal)));

var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? ["https://palinfosys.com"];
builder.Services.AddCors(options => options.AddPolicy("contact", policy => policy
    .WithOrigins(allowedOrigins)
    .WithHeaders("Content-Type")
    .WithMethods("POST")));

builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    options.AddPolicy("contact", context => RateLimitPartition.GetFixedWindowLimiter(
        context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
        _ => new FixedWindowRateLimiterOptions
        {
            PermitLimit = 5,
            Window = TimeSpan.FromMinutes(10),
            QueueLimit = 0,
            AutoReplenishment = true,
        }));
});

var app = builder.Build();
app.UseExceptionHandler(exceptionApp => exceptionApp.Run(async context =>
{
    var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;
    var isBadRequest = exception is BadHttpRequestException;
    var statusCode = isBadRequest ? StatusCodes.Status400BadRequest : StatusCodes.Status500InternalServerError;
    var detail = isBadRequest
        ? "The enquiry request is not valid. Please review the form and try again."
        : "The enquiry could not be processed. Please try again later.";

    await Results.Problem(detail, statusCode: statusCode).ExecuteAsync(context);
}));
if (trustedProxies.Length > 0) app.UseForwardedHeaders();
if (!app.Environment.IsDevelopment()) app.UseHttpsRedirection();
app.UseCors("contact");
app.UseRateLimiter();

app.MapPost("/api/contact", async (
    ContactRequest request,
    ContactValidationOptions validationOptions,
    EmailOptions options,
    INotificationSender notificationSender,
    ILogger<Program> logger,
    CancellationToken cancellationToken) =>
{
    // Honeypot submissions receive a generic success response without validation or email.
    if (!string.IsNullOrWhiteSpace(request.Website)) return Results.Ok(new { message = "Thank you for your enquiry." });

    var errors = ContactRequestValidator.Validate(request, validationOptions.AllowedInterests, validationOptions.AllowedStages);
    if (errors.Count > 0) return Results.ValidationProblem(errors);

    if (!options.IsConfigured)
    {
        logger.LogError("Contact notification email is not configured.");
        return Results.Problem("The enquiry service is temporarily unavailable. Please try again later or contact PAL INFOSYS directly by email or phone.", statusCode: StatusCodes.Status503ServiceUnavailable);
    }

    try
    {
        await notificationSender.SendContactNotificationAsync(request, cancellationToken);
        return Results.Ok(new { message = "Thank you. Your enquiry has been sent to PAL INFOSYS." });
    }
    catch (SmtpException exception)
    {
        logger.LogError(exception, "Contact notification email delivery failed.");
        return Results.Problem("The enquiry could not be sent. Please try again later or contact PAL INFOSYS directly by email or phone.", statusCode: StatusCodes.Status503ServiceUnavailable);
    }
}).RequireRateLimiting("contact");

app.Run();
