# Explanation — Merge Billing Periods

## Classic pattern

**Merge intervals**—one of the most common “medium” problems for business-facing engineers because contracts, campaigns, and subscriptions are all intervals.

## Touching intervals

`[1,5]` and `[6,10]` merge because `end + 1 >= start` (continuous coverage). Clarify with interviewer—some domains use strict overlap only.

## Steps

1. Group by `advertiserId`.
2. Sort by `start`.
3. Linear scan merge.

## Complexity

- Time: O(n log n) from sorting per advertiser (worst case one advertiser → O(n log n)).
- Space: O(n) output.

## IC5 business tie-in

- Prevents **double billing** when ops renews early and systems create overlapping rows.
- Pair with **proration** discussion when merging changes invoice line items.
