# Explanation — Merge Overlapping Billing Periods

## Approach

Classic **merge intervals** per advertiser:

1. Group periods by `advertiserId`.
2. Sort by `start` ascending.
3. Linear scan: merge if `next.start <= cur.end + 1` (touching counts as overlap).
4. Return all merged intervals sorted by `advertiserId`, then `start`.

## Constraints

- Up to 100_000 periods, 10_000 advertisers.
- Merge when intervals **overlap or touch**: `end1 + 1 >= start2`.
- Per-advertiser merge only (never merge across advertisers).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty input | `[]` | No groups |
| Touching intervals `[1,5]` + `[6,10]` | One merged interval | `6 <= 5 + 1` → merge |
| Non-overlapping gap | Separate intervals | No merge |
| Nested intervals | Single merged span | Extend `end` to max |
| Unsorted input | Correct merge | Sort by `start` first |
| Different advertisers | Independent merges | Group by `advertiserId` |

**Overlap rule (inclusive days):** intervals overlap if they share any day. Non-overlap requires `end_j < start_i`.

## Complexity

O(n log n) from sorting per advertiser group.

## IC5 discussion

- **Double billing:** merged view prevents duplicate charges on overlapping contracts.
- **Proration:** production may need revenue allocation inside merged spans, not just union.

## Clarify with interviewer

Some domains use strict overlap (`start2 <= end1`) without touching. This problem uses **touching merges**—state that explicitly.
