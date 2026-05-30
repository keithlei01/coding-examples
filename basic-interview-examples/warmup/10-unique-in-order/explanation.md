# Explanation

Walk the array once; a `Set` tracks values already emitted. Keep the **first** occurrence of each value in original order.

Different from **find duplicates** — here you keep one copy of each value, not list duplicate-only values.

## Constraints

- Length ≤ 20_000.
- Keep first occurrence of each value.
- Preserve original order.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty array | `[]` | Filter returns empty |
| Consecutive dupes `[1,1,2,1]` | `[1, 2]` | Set skips repeats |
| Non-consecutive `[a,b,a,c,b]` | `[a, b, c]` | Set remembers earlier values |
| All unique | Same order as input | Every value passes filter once |

**Time:** O(n) · **Space:** O(unique values)

Relates to DAU (distinct users) in easy/01 — counting unique vs listing unique.
