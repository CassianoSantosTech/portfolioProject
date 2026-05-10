import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Security headers applied to every route.
 *
 * Threat model: static one-page portfolio. No API routes, forms, server
 * actions, fetches, cookies, or user-supplied input anywhere. The only
 * inline content is the hardcoded theme boot script in <head>.
 *
 * Dev vs prod CSP:
 *   - In `next dev`, webpack uses `eval-source-map` and Fast Refresh opens
 *     a WebSocket to /_next/webpack-hmr. So dev requires 'unsafe-eval' on
 *     scripts and an opened-up connect-src; without those, React never
 *     hydrates locally and onClick handlers silently no-op.
 *   - In production builds, Next emits no eval and no HMR socket, so we
 *     drop those allowances. 'unsafe-inline' on scripts is still kept for
 *     the hardcoded theme boot script (one line, hardcoded, no user input
 *     reaches it). 'unsafe-inline' on styles is required by next/font and
 *     Tailwind utility injection — there is no way around it without
 *     migrating to nonces, which breaks static generation.
 */
const isDev = process.env.NODE_ENV !== "production";

const scriptSrc = ["'self'", "'unsafe-inline'", isDev && "'unsafe-eval'"]
  .filter(Boolean)
  .join(" ");

const connectSrc = ["'self'", isDev && "ws:", isDev && "wss:"]
  .filter(Boolean)
  .join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src ${connectSrc}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default withNextIntl(nextConfig);
