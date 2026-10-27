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

## Price passages and cover availability
Price-evidence passages are extracted from source text with nearby fee/eligibility wording and displayed inside source-reference details. They remain source claims, never promoted automatically to verified totals or nightly rates. Tests include refundable deposits, member restrictions, local currency and ambiguous dollar amounts. Twenty tests pass. All 32 cover links were checked with HTTP HEAD; six failed availability/content-type checks and each had a working replacement found within its saved image list. All gallery links remain stored. A visual illustration now remains behind a failed cover image. Stripe login and an actual subscribed-user queued cycle are still outstanding; no live charge or fake subscription was created.

Provider responses now have a streaming byte limit before JSON parsing, preventing oversized PDF/base64 responses from exhausting Worker memory. Original successful responses remain archived in chunks; job status rows use bounded display projections. Twenty-two tests pass, including cancellation of an oversized chunked response and preservation of Unicode content.

## Browser audit
Switched through all eight Tokyo sections, opened a Stay details modal, and checked mobile bottom navigation at 390×844. Research notes now start collapsed and Markdown/navigation-heavy snippets are cleaned or replaced with a source-link prompt. Twenty-five tests and build pass. RELEASE-AUDIT.md separates proven behaviour from pending Stripe/subscribed queue verification and the remaining editorial limitations.
