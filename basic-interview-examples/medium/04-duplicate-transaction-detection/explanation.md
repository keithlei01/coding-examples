# Explanation — Duplicate Transaction Detection

## Approach

1. **Bucket** events by `(userId, amountCents)`.
2. **Sort** each bucket by `timestamp`.
3. **Sliding window + Union-Find:** union txn pairs within `windowSeconds`.
4. Return components of size ≥ 2, sorted as specified.

## Constraints

- Up to 50_000 events.
- Duplicate rule: same `userId` **and** `amountCents`, `|t1 - t2| <= windowSeconds` (default 300).
- Groups are **transitive** (A≈B and B≈C ⇒ one group even if A and C are far apart).
- Only groups of size ≥ 2; txnIds sorted asc within group; groups sorted by smallest txnId.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty events | `[]` | No groups |
| Single event | `[]` | Size < 2 filtered out |
| Transitive chain t1–t2–t3 | One group | Union-Find merges all three |
| Different amounts | Never united | Separate buckets |
| Outside window | No group | Two-pointer never unions |
| `windowSeconds = 0` | Only same-timestamp pairs | `\|delta\| <= 0` |
| Chain example | `["t1","t2","t3"]` | t1@1010, t2@1020, t3@1000 all within 300s of neighbor |

## Why Union-Find

Pairwise linking fails for chains: t1 and t3 may be > 300s apart but both link to t2. UF captures transitive closure in near-linear time.

## Complexity

O(n log n) from sorting buckets; UF nearly O(n α(n)).

## Business

Chargeback fraud, accidental double-charge, missing idempotency keys. Production: add `idempotencyKey` at API layer; this detector is a backstop.

## Stream extension (verbal)

Evict events older than window from each bucket; union incrementally on ingest.
