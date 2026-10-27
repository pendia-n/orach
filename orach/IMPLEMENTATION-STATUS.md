# Orach implementation status

The requested launch is incomplete. Do not equate local build/test success with live data coverage or deployment.

## Implemented locally

- Exact 32-city launch catalogue and catalogue regression tests.
- Scheduler requires an unexpired active/trialing subscription and ranks recorded visits over seven days, capped at ten cities. Future database-backed draft/published cities can enter the ranking.
- Original section/provider mapping restored; complete response JSON retained.
- New-city overview request, eight concurrent section request builders, persisted discovery API, progress screen and dynamic city lookup.
- Free section contributions; five unique non-author likes qualify each note as a labelled community info card.
- Four provider adapters, 55 accepted existing section responses, explicit rejection of Okinawa/Naha as Hanoi Play.
- Offline import verified in SQLite with versioned response chunks and SHA-256 integrity checks.
- Collector dry-run: 201 requests, concurrency four, no retries, planned 150 Tavily credits / 250 Firecrawl credits / $0.607 Exa; caps 150 / 250 / $1. Persistent reservations and response caches. It has not been executed.

## Applied remotely

Only migrations 0002_subscriptions and 0003_research_cache. Do not assume migration 0004 or prepared imports have been applied.

## Outstanding implementation and verification

- Execute authorized collection after approval; inspect provider errors and actual costs; retain all caches under presets.
- Apply chunk migration/import after approval, verify remote response hashes, and normalize usable facts into city_entries. Source references alone are not completed recommendation cards.
- Correct missing or inapplicable category coverage without inventing facts. Replace Hanoi Play with Hanoi-specific evidence.
- Configure provider secrets on the existing single Worker through a safe transfer; never print values.
- Complete live new-city verification, including persistence and profile-card updates. Current section orchestration is browser initiated; durable completion after the user leaves is not yet established.
- Subscription table is not yet synchronized from a recurring Stripe purchase flow. Existing checkout remains a one-time stay pass. The scheduler gate must not be represented as a completed subscription product.
- Check budgets/failed-job recovery and live concurrent request behavior, then finish release validation.
- Commit/push/build/deploy after authorization gates clear. The Git root is the parent cultural-lifestyle directory; carefully scope staging and inspect for embedded credentials in old preset examples before pushing.

## Approval blockers

Automatic approval review rejected bulk provider collection, the chunked remote D1 import, and Git commits. Two explicit approval questions are pending in the chat: capped collection/D1 import, and commit/push. Do not retry these actions through a workaround while replies are pending.

## Commands once allowed

- Plan only: node --experimental-strip-types scripts/collect-presets.mjs
- Collection: same command with --execute (requires pending approval).
- Regenerate import: node --experimental-strip-types scripts/prepare-import.mjs
- Local validation: pnpm check; node --experimental-strip-types --test tests/*.test.ts; pnpm build

No successful paid-provider fetch, remote research import, new deployment, commit or push has occurred in this implementation run.
