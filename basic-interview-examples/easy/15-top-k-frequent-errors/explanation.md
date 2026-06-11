# Explanation — Top K Frequent Error Codes

## LeetCode link

[LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Approach

1. Count with `Map<string, number>`.
2. Sort by count desc, code asc.
3. `slice(0, k)`.

Same skeleton as [05-top-products-by-units](../05-top-products-by-units/) but keyed on **frequency** not revenue/units.

```javascript
counts.set(code, (counts.get(code) || 0) + 1);
```

## Edge cases

| Case | Handling |
|------|----------|
| Empty logs | `[]` |
| Tie on count | `code` ascending |
| k > distinct | `slice` returns all |

## Complexity

- **Time:** O(n + u log u) — n lines, u unique codes
- **Space:** O(u)

## IC5 follow-up: min-heap

For large u and small k, use size-k heap — O(n log k). Verbal only at easy level.

## Why this shows up

Meta screens often pair **business metrics** with a canonical LC pattern. Top K is the most common frequency problem after Two Sum.

## Related in repo

- [05-top-products-by-units](../05-top-products-by-units/) — top K with tie-breaks
- [warmup/02-count-occurrences](../../warmup/02-count-occurrences/) — counting primer
