# Orach

Orach helps temporary visitors understand everyday life somewhere new: food, drinks, participatory activities, shopping, essentials, neighbourhoods, accommodation and transport. A reusable home profile and editable stay budget start with the traveller’s own habits rather than pretending currency establishes a personal baseline.

## What is implemented

- 32 launch destinations; Manchester has explicitly labelled source excerpts. Other cities are awaiting research. No fabricated popularity, current prices or completed research.
- Free username/password signup, login, passcode recovery and security settings. Recovery passcodes are eight lowercase letters/numbers and stored with PBKDF2. Passwords use PBKDF2-SHA256 with random salts. Sessions use HS256 JWTs and Secure, HttpOnly, SameSite=Lax cookies for **eight days**. JWT signing secret is generated with `openssl rand -hex 32`, persisted in ignored `.env`, and mirrored to ignored `.dev.vars` for local development. Credential values must never be displayed.
- Home profile, device drafts, D1 saved stays and basic budgeting are free. User-entered exchange rates are explicitly not live rates.
- Free section comments and likes. The leading note with at least **five unique non-author account likes** is the default community highlight. It stays attributed and is not a verified price or safety claim. Report submissions are stored in `comment_reports`; operator review uses D1. There is no automatic content moderation service or admin dashboard yet.
- One optional **US$7.99 destination-stay pass**, not a subscription. Three scenarios, personal allowance comparison and JSON export require a paid entitlement. Public city content, signup and participation remain free. A pending checkout/pass locks city and dates to prevent entitlement drift. Other sessions are revoked when security details change or an account signs out.
- Stripe hosted Checkout in USD with dynamic eligible payment methods, including fiat and USDC when the account supports them. No payment-method allowlist. Raw-body signature verification, replay tolerance, event deduplication, paid-status fulfillment, delayed success, and full-refund revocation. Checkout returning to the app does not grant access. Payments are disabled until keys, webhook, price and canonical origin are configured. No live payment has been exercised by implementation alone.
- Research worker scheduled **02:00 UTC on the 1st and 15th** (10:00 Hong Kong), for the top ten cities by recorded visitor-city-day searches in the preceding 30 days. With no searches it does no provider work. All eight sections are considered. No repeated city/section job in the same half-month cycle. Missing keys create `awaiting_key` jobs. Raw responses stay review drafts; there is no automatic publication. Firecrawl is reserved for manual fallback and is not called by the schedule.

## Operation

`pnpm check`, `pnpm build`, `pnpm dev`.

Apply `migrations/0001_initial.sql` through Wrangler, locally before development and remotely only to the configured Orach database. Generate the non-sensitive catalogue seed with `node --experimental-strip-types scripts/seed.ts`; apply the resulting SQL once. Source research files in the sibling presets directory are **not** copied wholesale: they may contain credentials and malformed exports.

Single worker: `orach`, configured by `wrangler.jsonc`. Root `worker.js` delegates HTTP requests to the SvelteKit build and scheduled events to `scripts/research.ts`. One D1 binding and one secret configuration serve both. Never commit `.env` or `.dev.vars`. No Git repository was created and no commit/push is required by this release request.

## Setup and limitations

See `SETUP.md` for provider keys and Stripe webhook steps. Pricing is an unvalidated hypothesis. The free provider allowances do not establish sustainable commercial economics. Research requires manual evidence review before publication; most selected cities have no profile content yet. No paid research calls, fabricated guide generation, live Stripe charge or source licensing approval is implied by deployment.

User assurance comes from clearly labelled unknowns, source and condition links, an immediate free budget and recoverable accounts. This reduces uncertainty without presenting estimates as guarantees. The intended differentiation is connecting concrete local choices to the traveller’s own routine; willingness to pay remains unproven.
