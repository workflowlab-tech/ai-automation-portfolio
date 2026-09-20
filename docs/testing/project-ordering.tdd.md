# Project ordering TDD evidence

## User journeys

- As a portfolio visitor, I see Fairy Skin Studio featured on the homepage instead of Personal Income & Expense.
- As a portfolio visitor, I see Idol Fairies Beauty immediately below Fairy Skin Studio on the projects page.

## Evidence

| Guarantee | Test | Result |
| --- | --- | --- |
| Fairy Skin Studio replaces Personal Income & Expense in the homepage featured list | `node --test tests/idol-fairies-beauty-content.test.mjs` | RED before implementation; PASS after implementation |
| Idol Fairies Beauty follows Fairy Skin Studio in the full projects list | `node --test tests/idol-fairies-beauty-content.test.mjs` | RED before implementation; PASS after implementation |
| Existing project content checks remain valid | `node --test tests/idol-fairies-beauty-content.test.mjs` | 6/6 PASS |
| Code style remains valid | `npm run lint` | PASS |
| The production application compiles and all static project pages generate | `npm exec next build -- --webpack` | PASS |

## Known gap

The default Turbopack build cannot bind its internal compilation port in the restricted execution environment. The webpack production build completed successfully and supplied the build and TypeScript verification for this change.
