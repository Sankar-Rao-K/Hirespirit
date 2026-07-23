// Lightweight client-side error reporter for the root error boundary.
//
// This intentionally just logs to the console. If you later add an
// analytics or monitoring tool (Sentry, LogRocket, PostHog, etc.), this is
// the one place to wire it up — every caught error already flows through
// here via reportError().
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[error-boundary]", message, {
    route: window.location.pathname,
    stack: error instanceof Error ? error.stack : undefined,
    ...context,
  });
}
