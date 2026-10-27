# Orach release audit

## Proven

- Production D1 contains the original 32 cities × eight archived section responses. Hanoi Play was replaced with Hanoi evidence; rejected Okinawa data is excluded.
- The 32 city image rows contain stored gallery URLs and selected covers. Availability checks found six failing covers; working alternatives were saved from the existing lists. Broken image rendering has an illustration fallback. Image relevance and publication rights are not proven by HTTP availability.
- All 32 launch city pages responded successfully. A browser check switched through all eight Tokyo sections, opened the Little Japan details dialog, and observed mobile bottom navigation at 390×844. Stay records retained kitchen, laundry, check-in, fees and restrictions without treating laundry fees as room prices.
- A live free signup generated and saved Florence's overview. Florence appeared in Explore and its profile loaded. The temporary account was removed. No fake paid subscriber was inserted.
- Source prices and conditions are retained as attributed passages; unknown or unverified total prices are not invented. These are research previews, not a fully curated or independently verified venue database.
- Production has one Worker, orach, with its D1 binding, queue producer/consumer, and twice-monthly cron. Build finalization preserves all three handlers.
- Fixture tests cover monthly subscription Checkout mapping, unsigned webhook rejection, authoritative current subscription state overriding a stale signed event, access scoping, eight provider routes/persistence, duplicate-job prevention, byte-limited provider reading, and source-excerpt cleaning. Twenty-five tests and the production build pass.

## Implemented but not fully proven live

- Orach Plus monthly billing, entitlement synchronization, renewal/failure/cancellation behaviour and the customer portal.
- A subscribed user's new-city overview → actual queue delivery → eight provider responses → saved/displayed profile, including continuation after leaving the page.
- Paid budget-version saving and printable summaries through an actual Stripe-paid account.
- Community promotion under real independent use; unique non-author account likes are enforced, but account uniqueness is not proof of independent people or truth.
- Scheduled top-ten refresh with a real active paid subscriber. Zero subscriptions currently means no scheduled provider calls; fixture tests cover the gate and routes.

## External blocker

Stripe CLI credentials report expiry on 2026-10-10. A read-only API attempt failed and requires fresh login. `stripe login` must be completed before sandbox billing lifecycle checks can continue. No live charge has been made to simulate validation.

## Product limitation

Collected search results can be broad articles and sparse snippets. Some source text is unavailable or inapplicable; some city sections have no confirmed comparable prices. Source-reference cards and clear unknown labels are useful discovery material, but must not be marketed as complete, verified city recommendations. Further editorial review/source checking remains necessary for that claim.
