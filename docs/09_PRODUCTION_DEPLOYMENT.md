# Production Deployment Requirements

## Target domains

- `https://palinfosys.com` serves the frontend and is the canonical public origin.
- `https://www.palinfosys.com` redirects permanently to `https://palinfosys.com`.
- `https://api.palinfosys.com` serves the ASP.NET Core contact API over HTTPS.

## Frontend

Build the frontend with:

```bash
npm ci
npm run build
```

Deploy the generated `dist/` directory to a host that:

- serves the application over HTTPS;
- redirects HTTP to HTTPS;
- redirects `www.palinfosys.com` to the canonical domain;
- rewrites known SPA routes to `index.html` so direct loads work; and
- returns the branded application 404 page with an HTTP 404 status for unknown routes where the host supports that behavior.

Set this public build-time variable in the frontend host:

```text
VITE_CONTACT_API_BASE_URL=https://api.palinfosys.com
```

This value is public by design. Do not place SMTP credentials, API secrets, or certificates in frontend variables.

## Contact API

Build the API with:

```bash
dotnet build server/PalInfosys.ContactApi/PalInfosys.ContactApi.csproj
```

Host the API behind HTTPS at `api.palinfosys.com`. Route `POST /api/contact` to the application and configure secrets through the host environment or secret manager:

```text
Email__Host=<smtp-host>
Email__Port=<smtp-port>
Email__UseSsl=true
Email__Username=<smtp-username>
Email__Password=<smtp-password-or-app-password>
Email__From=info@palinfosys.com
Email__To=info@palinfosys.com
Cors__AllowedOrigins__0=https://palinfosys.com
ReverseProxy__TrustedProxies__0=<trusted-reverse-proxy-ip>
```

The API validates submissions, rejects its hidden honeypot, and rate-limits requests. Keep the allowed origin narrow. Do not use `AllowAnyOrigin` for production. Configure forwarded headers only with the known reverse-proxy address so rate limiting uses the actual visitor IP without trusting client-provided headers.

## Contact delivery check

Before launch, send a real enquiry through the deployed contact form and confirm that:

1. `info@palinfosys.com` receives the notification;
2. the sender address is approved by the SMTP provider;
3. success, validation, rate-limit, and unavailable states remain visitor-safe; and
4. no SMTP credentials, address-book data, or form content appear in browser logs.

## Rollback

Keep the prior frontend build and API release available in the hosting platform. If a release fails:

1. restore the previous frontend artifact;
2. restore the prior API release;
3. retain the existing secret configuration;
4. verify the canonical domain, API health, and one contact submission; and
5. investigate from host logs without copying SMTP credentials or enquiry content into source control.
