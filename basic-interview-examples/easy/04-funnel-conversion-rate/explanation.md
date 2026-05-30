# Explanation — Funnel Conversion Rate

## Approach

1. For each journey, determine the **deepest consecutive funnel step** from the start (strict order).
2. Increment `reached[i]` for every step index `0..deepest` inclusive—if you reached purchase, you also count as signup and landing.
3. Adjacent step rates: `reached[i+1] / reached[i]`.

## Why not just count last step?

A user with `["landing", "purchase"]` without signup is **invalid** in this model—we stop extending at the break. That matches clean product analytics definitions.

## Connection to Meta-style work

Growth and ads teams live in funnels. You should verbalize:

- **Numerator/denominator definitions** (session vs user, same-day vs ever).
- **Drop-off** between steps drives experiment prioritization.

## Complexity

- **Time:** O(journeys × avg journey length × funnel length) with small funnel.
- **Space:** O(funnel length).

## IC5 follow-ups

- **Sequential funnel SQL:** `COUNTIF(step >= signup) / COUNTIF(step >= landing)`.
- **Sankey / optional steps:** need event-level timestamps, not just sets.
