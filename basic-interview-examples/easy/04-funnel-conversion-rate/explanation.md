# Explanation — Funnel Conversion Rate

## Approach

1. For each journey, determine the **deepest consecutive funnel step** from the start (strict order).
2. Increment `reached[i]` for every step index `0..deepest` inclusive—if you reached purchase, you also count as signup and landing.
3. Adjacent step rates: `reached[i+1] / reached[i]`, rounded to 4 decimals.

## Constraints

- Up to 100_000 journeys; funnel length ≤ 10.
- Strict prefix model: users cannot skip a step and still count later steps.
- Rates in [0, 1]; return one entry per adjacent funnel pair.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty journeys | All rates `0` | `reached` counts stay 0; `0/0` → 0 |
| `fromCount === 0` | Rate `0` | Guard denominator |
| Unknown steps in journey | Ignored | Only funnel steps matter |
| Out-of-order skip `["landing","purchase"]` | Only landing counted | Break when expected step missing |
| Single-step funnel | `[]` | No adjacent pairs |
| Journey never hits step 0 | Not counted | `deepest` stays -1 |
| Worked example | 3 landing, 2 signup, 1 purchase | Rates 2/3 ≈ 0.6667 and 1/2 = 0.5 |

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
