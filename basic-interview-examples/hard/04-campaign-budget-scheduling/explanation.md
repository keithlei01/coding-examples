# Explanation — Campaign Budget Scheduling

## Pattern

**Weighted interval scheduling** (CLRS-style DP)—harder than merge intervals because you **optimize** total value.

## Steps

1. Deduplicate: at most one chosen interval per `campaignId` (keep highest budget).
2. Sort by `endDay`.
3. `p[i]` = latest job j < i with `endDay < startDay[i]` (binary search).
4. `dp[i] = max(include i, exclude i)`.
5. Backtrack `scheduled`.

## Business mapping

Ads ops often have **exclusive** placements per day per account in simplified models. Real systems add capacity `k` (min-cost max-flow or DP on days).

## Complexity

- Time: O(n log n) for sort + n log n for binary searches + O(n) DP.
- Space: O(n).

## IC5 discussion

- Greedy by earliest end fails for weighted budgets—counterexample in interview.
- Production: also respect **minimum spend**, pacing, and regional calendars.
