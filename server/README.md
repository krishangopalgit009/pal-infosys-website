# PAL INFOSYS Contact API

This ASP.NET Core API validates and rate-limits website enquiries, then sends a plaintext notification email. It does not store enquiries in a database.

The public form collects only name, business email, company, optional phone, service/requirement, project stage, and a project message. Project stage is restricted to `Exploring`, `Planning`, `Existing System`, `Active Development`, or `Modernization`.

## Local run

```bash
dotnet run --project server/PalInfosys.ContactApi
```

The development profile listens on `http://localhost:5080`. Vite proxies `/api` to that address during local development.

## Required production configuration

Set these values through the hosting platform's secret/environment-variable facility. Do not commit credentials.

```text
Email__Host=<SMTP host>
Email__Port=<SMTP port>
Email__UseSsl=true
Email__Username=<SMTP username>
Email__Password=<SMTP password or provider app password>
Email__From=<approved sender address>
Email__To=info@palinfosys.com
Cors__AllowedOrigins__0=https://palinfosys.com
ReverseProxy__TrustedProxies__0=<known reverse-proxy IP, when applicable>
```

The API returns `503 Service Unavailable` rather than pretending to send mail when SMTP is not configured. Production hosting must route `/api/contact` to this API and keep HTTPS enabled. When it runs behind a reverse proxy, set only that proxy's trusted IP through `ReverseProxy__TrustedProxies__0`; the API then uses the forwarded visitor IP for rate limiting. Do not trust forwarded headers from arbitrary clients.
