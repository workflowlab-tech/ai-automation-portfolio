export const DISCOVERY_SHORT_FIELD_MAX_LENGTH = 120;
export const DISCOVERY_LONG_FIELD_MAX_LENGTH = 1000;

// Hidden field real visitors never fill in; a non-empty value marks the submission as a bot.
export const DISCOVERY_HONEYPOT_FIELD = "website";

// Shown whenever the request couldn't be delivered, so there's always a manual fallback.
export const DISCOVERY_FALLBACK_EMAIL = "mjablanque97@gmail.com";

export type DiscoveryBookingRequest = {
  name: string;
  company: string;
  email: string;
  automate: string;
  tools: string;
  bottleneck: string;
  timeline: string;
  preferredDate: string;
  preferredTime: string;
  [DISCOVERY_HONEYPOT_FIELD]?: string;
};

export type DiscoveryBookingResponse = { ok: true } | { ok: false; error: string };

export type DiscoveryAvailabilityResponse = { blockedTimes: string[] };
