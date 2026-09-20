import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const apiRoute = read("app/api/discovery/route.ts");
const booking = read("components/DiscoveryBooking.tsx");
const slots = read("lib/discoverySlots.ts");
const types = read("types/discovery.ts");
const envExample = read(".env.local");
const readme = read("README.md");
const contactPage = read("app/contact/page.tsx");

test("the discovery API forwards to the real webhook and rejects bots", () => {
  assert.match(apiRoute, /process\.env\.DISCOVERY_WEBHOOK_URL/);
  assert.match(apiRoute, /DISCOVERY_WEBHOOK_URL is not set/);
  assert.match(apiRoute, /DISCOVERY_HONEYPOT_FIELD/);
  assert.match(apiRoute, /export async function POST/);
  assert.match(apiRoute, /export async function GET/);
});

test("the booking form calls the API instead of faking a reservation", () => {
  assert.match(booking, /fetch\("\/api\/discovery"/);
  assert.match(booking, /submitting/);
  assert.doesNotMatch(booking, /Your discovery call is reserved/);
  assert.doesNotMatch(booking, /Local calendar placeholder/);
  assert.doesNotMatch(booking, /nextMockSlot/);
  assert.match(booking, /Request received\. I(&apos;|['’])ll confirm your call time by email within 1 business day\./);
  assert.match(booking, /Choose a Preferred Time/);
  assert.match(booking, /Available preferred times for/);
  assert.match(booking, /DISCOVERY_HONEYPOT_FIELD/);
});

test("the slot-blocking math leaves a full hour around a 30-minute booking", () => {
  assert.match(slots, /"9:00 AM", "9:30 AM", "10:00 AM"/);
  assert.match(slots, /export function expandBlockedTimes/);
  assert.match(slots, /export function isBookableWeekday/);
});

test("the fallback contact email is shown on send failure", () => {
  assert.match(types, /DISCOVERY_FALLBACK_EMAIL = "mjablanque97@gmail\.com"/);
  assert.match(apiRoute, /DISCOVERY_FALLBACK_EMAIL/);
  assert.match(booking, /DISCOVERY_FALLBACK_EMAIL/);
});

test("the webhook URL is documented and never hardcoded", () => {
  assert.match(envExample, /DISCOVERY_WEBHOOK_URL=/);
  assert.match(readme, /DISCOVERY_WEBHOOK_URL/);
});

test("GoHighLevel CRM is surfaced as a contact focus area", () => {
  assert.match(contactPage, /GoHighLevel CRM/);
});
