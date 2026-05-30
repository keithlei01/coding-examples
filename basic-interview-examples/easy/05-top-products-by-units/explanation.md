# Explanation — Top K Products by Units

## Approach

1. Hash map aggregate `units` and `revenueCents` per `productId`.
2. Sort with explicit comparator (units ↓, revenue ↓, id ↑).
3. `slice(0, k)`.

For interviews at easy level, full sort is acceptable. Mention heap for optimization.

## Optimal variant (verbal)

- **Time:** O(n + m log k) with min-heap of size k, m = distinct products.
- **Space:** O(m) for map + O(k) heap.

Business Eng IC5: know when **exact top K** vs **approximate** (HyperLogLog, Count-Min) is enough for catalog dashboards.

## Tie-break rationale

Same units → more revenue suggests higher buyer value; stable id breaks remaining ties for reproducible reports.

## Production angle

- Pre-aggregate daily in a warehouse; API reads materialized table.
- Handle returns: negative `units` or separate refund stream.
