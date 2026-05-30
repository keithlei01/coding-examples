# Explanation

- `seen` — every value encountered at least once.
- When you see a value already in `seen`, it is a duplicate; add to `result` only once (`reported` set).

## Constraints

- Array length ≤ 20_000.
- Values can be numbers or strings.
- Return each duplicate value **once**, in order of **first duplicate discovery** (2nd occurrence).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| No duplicates | `[]` | Nothing added to `reported` |
| All unique | `[]` | Same as above |
| 3+ copies of same value | Listed once | `reported` prevents re-adding |
| Order | First dup at 2nd sighting | e.g. `[1,2,2,3,1,4]` → `[2, 1]` |
| Strings vs numbers | Separate keys | `"1"` and `1` are distinct object keys |

Different from **unique in order** — here you list only values that appeared more than once.

**Time:** O(n) · **Space:** O(n)

Medium **duplicate-transaction** builds on this with time windows and Union-Find.
