# Orach

Orach is a city lifestyle research and personal trip-budget app on one Cloudflare Worker, `orach`, with D1 and one background research queue. The launch catalogue has 32 cities with 256 archived section responses. Newly discovered cities extend the catalogue; Florence was added by a live free-overview check.

## Access and subscription benefits

Orach has one paid plan: **Orach Plus, US$7.99/month**, renewing monthly until cancelled. Checkout uses `mode: 'subscription'` and inline `price_data.recurring.interval: 'month'`; no configured recurring Price ID is required.

| Feature | Free account / visitor | Active Orach Plus subscriber |
| --- | --- | --- |
| Browse collected city profiles, galleries and original sources | Yes, including profiles collected through members | Yes |
| Signup, home profile and basic saved stays | Free account required to save | Yes |
| Enter trip costs and a reference exchange rate; calculate a budget | Yes | Yes |
| Comments, likes and reports | Free account required | Same free access |
| Short overview for a missing city | Free account required | Yes |
| Commission eight researched sections and image collection for a missing city | No | Yes, within shared provider allowances |
| Save and reopen named budget versions | No | Up to three per stay |
| Compare destination food/transport allowance with home allowance | No | Yes, using the user's own costs and reference rate |
| Printable trip summary / save as PDF | No | Yes, for the user's saved stays |
| Manage subscription and cancellation | Not applicable | Stripe customer portal |

Membership applies across the subscriber's stays. Server access requires a subscription whose status is `active` and whose paid-period end is in the future. A cancellation scheduled for period end retains access while those conditions hold; inactive or expired subscriptions do not unlock paid routes. Existing saved research remains publicly browsable. Legacy one-time stay passes still unlock their original stay, but do not grant subscription-only city commissioning.

Budget comparisons cover entered food and transport allowances; they are not automatic cost-of-living estimates. Printable summaries are HTML designed for the browser's Print → Save as PDF option. Research commissioning has shared monthly provider limits and does not promise unlimited requests, instant completion, or independently verified prices.

Five unique non-author account likes qualify a contribution as labelled community information; votes do not verify facts. Paying does not promote comments or make them authoritative.

Stripe lifecycle events fetch authoritative subscription state. The user confirmed the three subscription events are enabled on the existing webhook. Checkout subscription configuration is verified in code and fixture tests; an actual paid lifecycle has not been validated. See BILLING-SETUP.md. Live Stripe testing is outside the current requested scope.

## Research

Eat, Drink and Essentials use Tavily Search; Play and Clothing use Exa Search; Neighbourhood and Stay use Exa Answer; Transport uses Firecrawl Search. Full responses are versioned and chunked in D1. Bounded display excerpts and cited draft cards do not imply that all claims or prices are verified. Amenity fees are not nightly room prices.

A missing city gets an Exa Answer overview. Members then enqueue all eight sections and image discovery. The existing Worker consumes the queue; leaving the page does not cancel queued work. Job leases permit recovery after interrupted processing, with bounded attempts. Completed results are reused. Failed or interrupted sections can recover within three total attempts; exhausted failures remain explicit, and provider budgets bound spending.

Tavily image search runs once for initial city collection and for newly commissioned member cities. D1 stores image URLs and a designated cover. Explore uses covers; city pages show galleries. Homepage and Explore research labels resolve saved D1 availability rather than stale catalogue defaults. Image relevance, availability and publication rights still require editorial judgement.

The twice-monthly cron (1st and 15th, 02:00 UTC) runs research only when an unexpired active subscription exists. It selects the top ten cities by deduplicated recorded searches over the preceding seven days. No popularity is invented for cities without activity.

## Operation

Run `pnpm check`, `node --experimental-strip-types --test tests/*.test.ts`, and `pnpm build`. The build's finalize-worker step must run: the Svelte adapter regenerates the Worker entry, and the finalizer restores fetch, scheduled and queue handlers. Apply all migrations, then deploy the existing Worker. Never deploy a second research Worker.

Session cookies are Secure, HttpOnly, SameSite=Lax and eight days. Keys remain server-side. Research caches and collection scripts must never embed credentials. Current validation and outstanding work are recorded in IMPLEMENTATION-STATUS.md.

## Automatic currency conversion

The planner fetches Frankfurter v2 rates automatically when the familiar currency is a complete three-letter code, including TND where supported. Blank/incomplete inputs do not fetch rates. The server caches each currency pair daily in D1 and returns the source rate date. Cached older rates are labelled if refresh fails. Users can override the rate manually; reference rates exclude bank/card fees. Destination currency remains separate from familiar currency.
