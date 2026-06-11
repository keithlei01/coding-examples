# Explanation — Two Sum Reconciliation

## LeetCode link

[LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)

## Approach

One pass with a `Map` from **value → index**:

```javascript
for (let j = 0; j < amountsCents.length; j++) {
  const need = targetCents - amountsCents[j];
  if (seen.has(need)) return [seen.get(need), j];
  seen.set(amountsCents[j], j);
}
```

For each `j`, check if complement `need` was seen earlier. Store current value **after** check so you don't reuse the same index twice.

## Edge cases

| Case | Result |
|------|--------|
| No pair | `[]` |
| `[3, 3]`, target 6 | `[0, 1]` |
| Negative amounts | Works with same logic |
| Return order | `i < j` by construction |

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## IC5 talking points

- Real use: pair matching in reconciliation batches.
- At scale: hash join in SQL / Spark instead of in-memory map.
- Duplicate amounts: map stores **first** index; problem guarantees one pair.

## Not ads-related

Pure hash-map pattern — appears in SWE **and** Business Eng screens as a warm-up or follow-on to a metrics question.
