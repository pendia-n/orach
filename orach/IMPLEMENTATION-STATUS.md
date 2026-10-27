# Release status

Production D1 holds all 256 section research responses for the 32 launch cities. The 201 new/replacement provider responses are backed up in commit d90291a; Hanoi Play uses Hanoi evidence. Compact display projections preserve full archived responses while avoiding loading binary PDF payloads into page rendering.

Current release work adds database-backed city image covers and galleries, fixes removed-city homepage links, and exposes collected research on profiles. Image search responses are cached locally under ignored research-output/images and URLs imported to city_images.

Still unfinished: subscription checkout and webhook entitlement synchronization; useful printable trip summaries; durable unknown-city background research; comprehensive evidence-grounded recommendation normalization; live end-to-end release verification. The existing one-time stay pass is not a subscription product. Do not claim subscription access is operational.

Scheduling is restricted to active subscriptions, top ten recorded cities over seven days, twice monthly. No active subscription means no scheduled provider calls.

## Further implementation (not yet live verified)
Monthly inline Checkout pricing, subscription lifecycle synchronization, active-member access across stays, legacy stay-pass compatibility, customer billing portal, and printable HTML trip summary are implemented. Existing profiles remain free; new-city overview is free while commissioning uncached sections requires membership. Scheduler moved to worker-entry.js so the adapter cannot overwrite it on build. Eleven unit tests pass; live Stripe transaction/webhook verification still requires configuration described in BILLING-SETUP.md. Durable discovery and deeper evidence normalization remain unfinished.

## Durable research release
The adapter writes whichever entry Wrangler names, so the original separate entry was still overwritten. The build now runs scripts/finalize-worker.mjs after the adapter, keeps its generated app in ignored generated-app-worker.js and restores worker-entry.js with fetch, scheduled and queue handlers. orach-city-research is a queue handled by the existing Worker, not another Worker. Member overview requests enqueue eight sections plus image discovery. Cached completed jobs are reused on redelivery; provider failures remain explicitly failed without repeated automatic provider spending. The discovery page polls progress, while jobs no longer depend on that page remaining open. Dynamic cities appear in Explore and the planner. Live end-to-end queue completion remains to be verified.

## Evidence display improvements
Labelled NAME records in Stay and Neighbourhood Answer responses now become individual cited draft cards with their original conditions. Amenity and cleaning fees do not become nightly rates. Display projections preserve source text/Markdown excerpts using a shared excerpt budget, while full responses stay in immutable chunks. Seventeen fixture-based tests pass, including all eight queued sections persisting results, monthly Checkout user mapping, and unsigned webhook rejection. These tests do not prove a live Stripe transaction or live queue/provider cycle.

## Live overview and recovery audit
A temporary free signup successfully generated and saved Florence, Italy, with status needs_review and queued=false. The genuine researched profile remains; cleanup targets only the exact test account ID and username. No fake active subscription was inserted. Stripe CLI whoami reports expired credentials and a read-only API request requires fresh login; live payment lifecycle verification is blocked on Stripe authentication. New home-profile country/local-currency fields trigger discovery without inferring local currency from the familiar currency. Job lease migration 0006 and bounded interrupted-job recovery were added; research_jobs stores a display projection only after complete section archive persistence. Eighteen fixture-based tests pass.
