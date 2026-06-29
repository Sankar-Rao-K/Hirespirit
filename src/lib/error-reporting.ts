/**
 * Lightweight error reporter.
 * Logs to the console in development; swap `captureException` for your own
 * analytics/monitoring service (e.g. Sentry) in production.
 */

type ErrorContext = Record<string, unknown>;

export function reportError(error: unknown, context: ErrorContext = {}): void {
  if (typeof window === "undefined") return;

  const isDev = import.meta.env?.DEV ?? false;

  if (isDev) {
    console.error("[Error]", error, context);
  }

  // Production hook — wire up your monitoring service here:
  // e.g. Sentry.captureException(error, { extra: context })
}
