# Explanation

Two-pointer merge: compare heads of `a` and `b`, push the smaller, advance that index. When one array is exhausted, copy the remainder.

## Constraints

- Both arrays sorted ascending (not validated — assume valid input).
- Combined length ≤ 20_000.
- Prefer O(n + m) two-pointer over O(n log n) concat+sort.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| One empty array | Other array as-is | Skip compare loop; copy remainder |
| Both empty | `[]` | Return empty array |
| Equal elements | Stable preference for `a` | `a[i] <= b[j]` takes from `a` first |
| Single elements `([2], [1])` | `[1, 2]` | Normal compare path |

**Time:** O(n + m) · **Space:** O(n + m)

Relates to merge-intervals and sliding-window problems in medium/hard tiers.
