# Orach

Orach is a city lifestyle research and personal trip-budget app on one Cloudflare Worker, `orach`, with D1 and one background research queue. The launch catalogue has 32 cities with 256 archived section responses. Newly discovered cities extend the catalogue; Florence was added by a live free-overview check.

## Access

Free: city profiles and original source links, account signup, home profile, basic saved stays, comments, likes and reports, plus a short overview for a missing city. Five unique non-author likes qualify a contribution as labelled community information; votes do not verify facts.

Orach Plus: US$7.99/month, renewing until cancelled, three saved budget versions per stay, personal allowance comparison, printable HTML trip summary (browser Print → Save as PDF), and commissioning eight sections for missing cities within shared provider budgets. Active subscriptions unlock paid features across stays. Legacy one-time stay passes continue to unlock their original stay. Stripe lifecycle events fetch authoritative subscription state; customer portal provides cancellation. Live billing lifecycle verification is pending fresh Stripe sandbox authentication. See BILLING-SETUP.md.

## Research

Eat, Drink and Essentials use Tavily Search; Play and Clothing use Exa Search; Neighbourhood and Stay use Exa Answer; Transport uses Firecrawl Search. Full responses are versioned and chunked in D1. Bounded display excerpts and cited draft cards do not imply that all claims or prices are verified. Amenity fees are not nightly room prices.

A missing city gets an Exa Answer overview. Members then enqueue all eight sections and image discovery. The existing Worker consumes the queue; leaving the page does not cancel queued work. Job leases permit recovery after interrupted processing, with bounded attempts. Completed results are reused, failed sections remain explicit, and provider budgets bound spending.

Tavily image search runs once for initial city collection and for newly commissioned member cities. D1 stores image URLs and a designated cover. Explore uses covers; city pages show galleries. Image relevance, availability and publication rights still require editorial judgement.

The twice-monthly cron (1st and 15th, 02:00 UTC) runs research only when an unexpired active subscription exists. It selects the top ten cities by deduplicated recorded searches over the preceding seven days. No popularity is invented for cities without activity.

## Operation

Run `pnpm check`, `node --experimental-strip-types --test tests/*.test.ts`, and `pnpm build`. The build's finalize-worker step must run: the Svelte adapter regenerates the Worker entry, and the finalizer restores fetch, scheduled and queue handlers. Apply all migrations, then deploy the existing Worker. Never deploy a second research Worker.

Session cookies are Secure, HttpOnly, SameSite=Lax and eight days. Keys remain server-side. Research caches and collection scripts must never embed credentials. Current validation and outstanding work are recorded in IMPLEMENTATION-STATUS.md.
