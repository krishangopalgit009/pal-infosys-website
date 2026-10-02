using System.Net;
using System.Net.Mail;
using System.Text;
using PalInfosys.ContactApi.Contracts;

namespace PalInfosys.ContactApi.Services;

public sealed class EmailOptions
{
    public const string SectionName = "Email";
    public string Host { get; init; } = string.Empty;
    public int Port { get; init; } = 587;
    public bool UseSsl { get; init; } = true;
    public string Username { get; init; } = string.Empty;
    public string Password { get; init; } = string.Empty;
    public string From { get; init; } = string.Empty;
    public string To { get; init; } = "info@palinfosys.com";

    public bool IsConfigured => !string.IsNullOrWhiteSpace(Host)
        && !string.IsNullOrWhiteSpace(Username)
        && !string.IsNullOrWhiteSpace(Password)
        && !string.IsNullOrWhiteSpace(From)
        && !string.IsNullOrWhiteSpace(To);
}

public interface INotificationSender
{
    Task SendContactNotificationAsync(ContactRequest request, CancellationToken cancellationToken);
}

public sealed class SmtpNotificationSender(EmailOptions options) : INotificationSender
{
    public async Task SendContactNotificationAsync(ContactRequest request, CancellationToken cancellationToken)
    {
        using var message = new MailMessage
        {
            From = new MailAddress(options.From, "PAL INFOSYS Website"),
            Subject = $"New PAL INFOSYS project enquiry: {request.Interest!.Trim()}",
            Body = BuildBody(request),
            IsBodyHtml = false,
        };
        message.To.Add(options.To);
        message.ReplyToList.Add(new MailAddress(request.Email!.Trim(), request.Name!.Trim()));

        using var client = new SmtpClient(options.Host, options.Port)
        {
            EnableSsl = options.UseSsl,
            Credentials = new NetworkCredential(options.Username, options.Password),
        };

        await client.SendMailAsync(message, cancellationToken);
    }

    private static string BuildBody(ContactRequest request)
    {
        var body = new StringBuilder();
        body.AppendLine("New project enquiry from the PAL INFOSYS website");
        body.AppendLine();
        body.AppendLine($"Name: {request.Name!.Trim()}");
        body.AppendLine($"Business email: {request.Email!.Trim()}");
        body.AppendLine($"Company: {request.Company!.Trim()}");
        body.AppendLine($"Phone: {request.Phone?.Trim() ?? "Not supplied"}");
        body.AppendLine($"Service / interest: {request.Interest!.Trim()}");
        body.AppendLine($"Project stage: {request.Stage!.Trim()}");
        body.AppendLine();
        body.AppendLine("Message:");
        body.AppendLine(request.Message!.Trim());
        return body.ToString();
    }
}
