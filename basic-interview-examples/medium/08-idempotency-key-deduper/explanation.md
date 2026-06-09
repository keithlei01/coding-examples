# Explanation — Idempotency Key Deduper

## Interview framing

Stripe/Meta billing integrations rely on **idempotency keys**. This is the same sliding-window intuition as [06](../06-sliding-window-rate-limiter/), applied to **duplicate detection** instead of throughput limits.

## Approach

`Map<idempotencyKey, lastAcceptedTimestamp>`

For each request at `timestampSec`:

1. `windowStart = timestampSec - windowSec`
2. If key seen and `lastAccepted > windowStart` → `'duplicate'`
3. Else set `lastAccepted[key] = timestampSec` → `'accepted'`

```javascript
if (prev !== undefined && prev > windowStart) return "duplicate";
lastAccepted.set(idempotencyKey, timestampSec);
return "accepted";
```

Window `(timestampSec - windowSec, timestampSec]` — timestamp exactly `windowSec` ago is expired (`prev > windowStart`, not `>=`).

## Edge cases

| Case | Handling |
|------|----------|
| Empty input | `[]` |
| First sight of key | `accepted` |
| Retry inside window | `duplicate` |
| Same key after window | `accepted` (re-set timestamp) |
| Independent keys | Separate map entries |

## Complexity

- **Time:** O(n) — O(1) map ops per request
- **Space:** O(distinct keys with recent acceptance)

## vs rate limiter (06)

| | Rate limiter | Idempotency deduper |
|--|--------------|---------------------|
| Tracks | All allowed timestamps (queue) | Last accepted per key |
| Limit | Count ≤ N in window | 1 acceptance per key in window |
| Reject meaning | Throttle | Client retry / duplicate submit |

## IC5 talking points

- **At-least-once delivery:** dedupe at API boundary.
- **Response cache:** duplicates should return original charge ID, not re-run.
- **TTL storage:** Redis `SET key EX windowSec`.
- **amountCents ignored here** — production would also verify payload hash matches.

## Connection to this repo

- [06-sliding-window-rate-limiter](../06-sliding-window-rate-limiter/) — same window math
- [04-duplicate-transaction-detection](../04-duplicate-transaction-detection/) — fraud duplicate detection (different rules)
- [easy/03-coupon-validation](../../easy/03-coupon-validation/) — business rule validation
