# Explanation — Duplicate Transaction Detection

## Approach

1. **Bucket** by `(userId, amountCents)`—duplicates across different amounts are irrelevant.
2. Sort each bucket by `timestamp`.
3. **Sliding window:** for each `right`, unite `right` with all `left..right-1` still within `windowSeconds`—transitive closure via **Union-Find**.
4. Emit components of size ≥ 2.

## Why Union-Find

Pairwise flags miss chains: t1≈t2 and t2≈t3 but t1 and t3 might be 590s apart—still one duplicate burst.

## Complexity

- Per bucket of size m: O(m) amortized with two-pointer + UF.
- Overall O(n log n) from sorting buckets.

## Business Eng angle

- Reduces **false chargebacks** and revenue leakage.
- Discuss **idempotency keys** at API layer vs post-hoc detection.
- Human review queue: score = group size × amount.

## Stream extension (verbal)

Keep deque per `(userId, amount)` keyed hash; expire timestamps > window; union new txn with deque entries.
