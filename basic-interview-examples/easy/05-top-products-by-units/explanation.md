# Explanation — Top K Products by Units

## Approach

1. Hash map aggregate `units` and `revenueCents` per `productId`.
2. Sort with explicit comparator (units ↓, revenue ↓, id ↑).
3. `slice(0, k)`.

For interviews at easy level, full sort is acceptable. Mention heap for optimization.

## Constraints

- `1 <= k <= number of distinct products`.
- Up to 200_000 sale rows.
- Multiple rows per `productId` must be aggregated before ranking.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Multiple rows same product | Sum units and revenue | Map aggregation |
| Tie on units | Higher `revenueCents` wins | Secondary sort |
| Tie on units and revenue | `productId` ascending | Tertiary sort |
| `k === 1` | Single top product | `slice(0, 1)` |
| Empty `sales` | `[]` | No products to rank (violates k constraint in spec) |
| Example A+B | A: 5 units/250¢, B: 5 units/50¢ | A ranks first |

## Optimal variant (verbal)

- **Time:** O(n + m log k) with min-heap of size k, m = distinct products.
- **Space:** O(m) for map + O(k) heap.

Business Eng IC5: know when **exact top K** vs **approximate** (HyperLogLog, Count-Min) is enough for catalog dashboards.

## Production angle

- Pre-aggregate daily in a warehouse; API reads materialized table.
- Handle returns: negative `units` or separate refund stream.
