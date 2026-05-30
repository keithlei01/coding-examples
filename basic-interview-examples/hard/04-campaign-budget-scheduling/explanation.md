# Explanation — Campaign Budget Scheduling

## Pattern

**Weighted interval scheduling** (CLRS-style DP)—harder than merge intervals because you **optimize** total value.

## Steps

1. Deduplicate: at most one chosen interval per `campaignId` (keep highest budget).
2. Sort by `endDay`.
3. `p[i]` = latest job j < i with `endDay < startDay[i]` (binary search).
4. `dp[i] = max(include i, exclude i)`.
5. Backtrack `scheduled`.

## Constraints

- n ≤ 5_000 intervals.
- **At most one campaign per day** (no overlapping days across selected intervals).
- Same `campaignId` may appear multiple times — pick **at most one** interval per ID.
- Maximize total `budgetCents` scheduled.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty input | `{ maxBudgetCents: 0, scheduled: [] }` | Early return |
| Overlapping intervals | Pick optimal non-overlapping set | Weighted DP |
| Duplicate `campaignId` | Keep highest budget interval | Dedup before DP |
| Touching days | Inclusive overlap | `endDay < startDay` for non-overlap in `p[i]` |
| All overlap | Pick best single interval | DP evaluates exclude/include |
| Example A vs B vs C | B + C = 350 | B overlaps A; C is free after B |

**Inclusive days:** intervals `[1,3]` and `[3,5]` share day 3 → cannot both be selected. Non-overlap requires `endDay_j < startDay_i`.

## Business mapping

Ads ops often have **exclusive** placements per day per account in simplified models. Real systems add capacity `k` (min-cost max-flow or DP on days).

## Complexity

- Time: O(n log n) for sort + n log n for binary searches + O(n) DP.
- Space: O(n).

## IC5 discussion

- Greedy by earliest end fails for weighted budgets—counterexample: two small early jobs vs one large later job.
- Production: also respect **minimum spend**, pacing, and regional calendars.
