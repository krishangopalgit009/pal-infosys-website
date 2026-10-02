using System.Net.Mail;

namespace PalInfosys.ContactApi.Contracts;

public sealed record ContactRequest(
    string? Name,
    string? Email,
    string? Company,
    string? Phone,
    string? Interest,
    string? Stage,
    string? Message,
    string? Website);

public sealed record ContactValidationOptions(
    IReadOnlySet<string> AllowedInterests,
    IReadOnlySet<string> AllowedStages);

public static class ContactRequestValidator
{
    public static Dictionary<string, string[]> Validate(ContactRequest request, IReadOnlySet<string> allowedInterests, IReadOnlySet<string> allowedStages)
    {
        var errors = new Dictionary<string, string[]>();
        AddIf(errors, "name", string.IsNullOrWhiteSpace(request.Name) || request.Name.Trim().Length is < 2 or > 100, "Enter a name between 2 and 100 characters.");
        AddIf(errors, "company", string.IsNullOrWhiteSpace(request.Company) || request.Company.Trim().Length is < 2 or > 150, "Enter a company name between 2 and 150 characters.");
        AddIf(errors, "email", !IsValidEmail(request.Email), "Enter a valid business email address.");
        AddIf(errors, "phone", !string.IsNullOrWhiteSpace(request.Phone) && (request.Phone.Length > 40 || !request.Phone.All(character => char.IsDigit(character) || "+-() ".Contains(character))), "Enter a valid phone number or leave it blank.");
        AddIf(errors, "interest", string.IsNullOrWhiteSpace(request.Interest) || !allowedInterests.Contains(request.Interest), "Select a valid service or area of interest.");
        AddIf(errors, "stage", string.IsNullOrWhiteSpace(request.Stage) || !allowedStages.Contains(request.Stage), "Select a valid project stage.");
        AddIf(errors, "message", string.IsNullOrWhiteSpace(request.Message) || request.Message.Trim().Length is < 20 or > 3000, "Enter a project message between 20 and 3,000 characters.");
        AddIf(errors, "website", !string.IsNullOrWhiteSpace(request.Website), "Invalid form submission.");
        return errors;
    }

    private static bool IsValidEmail(string? email)
    {
        if (string.IsNullOrWhiteSpace(email) || email.Length > 254) return false;
        try { _ = new MailAddress(email); return true; }
        catch (FormatException) { return false; }
    }

    private static void AddIf(IDictionary<string, string[]> errors, string field, bool condition, string message)
    {
        if (condition) errors[field] = [message];
    }
}
