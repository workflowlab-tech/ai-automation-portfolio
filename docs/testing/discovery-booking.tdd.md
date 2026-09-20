# Discovery booking form TDD evidence

## User journeys

- As a visitor, submitting the discovery form actually delivers my lead to MJ (via `DISCOVERY_WEBHOOK_URL`), not just a local browser state.
- As a visitor, I see an honest confirmation ("Request received...") instead of a false "your call is reserved" claim.
- As a visitor, if my submission fails, I see the fallback email so I can reach out directly.
- As a bot filling every field including the hidden one, my submission is silently discarded.

## Evidence

| Guarantee | Test | Result |
| --- | --- | --- |
| `/api/discovery` forwards to `DISCOVERY_WEBHOOK_URL` and errors if it's unset | `node --test tests/discovery-booking-content.test.mjs` | RED before implementation; PASS after |
| The booking form calls the real API and removes the mock reservation copy | `node --test tests/discovery-booking-content.test.mjs` | RED before implementation; PASS after |
| A booked 30-minute slot blocks itself plus the next slot (1-hour gap) | `node --test tests/discovery-booking-content.test.mjs` | PASS |
| The fallback email is defined once and reused by both the API and the UI | `node --test tests/discovery-booking-content.test.mjs` | PASS |
| GoHighLevel CRM is listed as a contact focus area | `node --test tests/discovery-booking-content.test.mjs` | PASS |
| Existing test suite remains valid | `node --test tests/idol-fairies-beauty-content.test.mjs` | 6/6 PASS |
| Type safety | `npx tsc --noEmit` | PASS |
| Code style | `npm run lint` | PASS |
| Production build | `npm run build` | PASS |

## Known limitation

Booked slots are tracked in an in-memory `Map` inside `app/api/discovery/route.ts` (same
best-effort trade-off already used by `/api/chat`'s rate limiter) — it resets on redeploy
or cold start. Since the booking is explicitly a "preferred time" confirmed manually by
email afterward, this is an acceptable UX nicety rather than a durable calendar system.
