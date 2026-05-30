# 05 — Top K Products by Units Sold

## Context

Given sales records `{ productId, units, revenueCents }`, return the top `k` products by **units sold** (sum of `units`). Tie-break: higher `revenueCents` sum wins; then `productId` lexicographically ascending.

## Task

Implement `topKProductsByUnits(sales, k)`.

## Example

```javascript
const sales = [
  { productId: "A", units: 2, revenueCents: 100 },
  { productId: "B", units: 5, revenueCents: 50 },
  { productId: "A", units: 3, revenueCents: 150 },
];
topKProductsByUnits(sales, 2);
// [
//   { productId: "A", units: 5, revenueCents: 250 },
//   { productId: "B", units: 5, revenueCents: 50 },
// ]
```

## Constraints

- `1 <= k <= number of distinct products`
- Up to 200_000 sale rows.

## Follow-ups

- Streaming input (can't store all)?
- Top K by revenue instead—different heap comparator.
