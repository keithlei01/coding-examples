# Explanation — Cohort Retention

## Approach

1. First pass: per user, min `weekIndex` = cohort assignment.
2. Track all active weeks per user in a `Set`.
3. For each user, for each active week `w`, increment cohort `(c, w-c)` active set (dedupe users with `Set` per cell).

## Why Sets per cell

Users with multiple events in the same week must count once in the numerator.

## Business framing

Cohort retention answers: **“Of users who started in week X, what fraction came back N weeks later?”**—core for PMF and ads advertiser stickiness.

## IC5 depth

- **Definition lock:** “active” = any event vs core action (purchase, campaign spend).
- **Denominator:** users with first event in cohort week only (exclude later joiners mis-assigned).
- **Warehouse:** `cohort = MIN(week)`, `GROUP BY cohort, week - cohort`.

## Complexity

- Time: O(events + users × avg weeks active)
- Space: O(users + cohort cells)
