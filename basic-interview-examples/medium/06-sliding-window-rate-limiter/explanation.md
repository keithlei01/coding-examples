# Explanation — Sliding Window Rate Limiter

## Interview framing

Classic **medium SWE** problem that still fits Business Eng prep because it reuses **sliding windows** from metrics (rolling revenue, stream aggregations). On CoderPad you’d implement `allow` in ~15 lines.

## Approach

Keep a queue (array) of **allowed** request timestamps in order.

For each `allow(timestampSec)`:

1. Drop expired: `while (timestamps[0] <= timestampSec - windowSec) shift()`
2. If `timestamps.length >= maxRequests` → reject (`false`)
3. Else `push(timestampSec)` → allow (`true`)

```javascript
while (this.timestamps.length && this.timestamps[0] <= windowStart) {
  this.timestamps.shift();
}
```

Window is `(timestampSec - windowSec, timestampSec]` — request exactly `windowSec` ago is expired.

## Constraints

- `1 <= maxRequests <= 10_000`, `1 <= windowSec <= 86_400`
- Timestamps non-decreasing per problem (live stream)
- Rejected requests are not stored

## Edge cases

| Case | Handling |
|------|----------|
| Empty `requests` | `[]` |
| First requests under limit | All allowed |
| At capacity | Reject until oldest expires |
| Same timestamp twice | Second rejected if first consumed slot |
| Large gap | Expired entries cleared from front |

## Complexity

- **Per `allow`:** amortized O(1) — each timestamp pushed once and shifted once
- **Space:** O(maxRequests) — at most that many entries in the queue

## vs other algorithms (IC5 verbal)

| Algorithm | Pros | Cons |
|-----------|------|------|
| **Sliding window log** (this) | Exact | Memory per active requests |
| **Token bucket** | Smooth bursts | Approximate window |
| **Fixed window counter** | Simple | Spike at bucket boundaries |

## Business Eng extensions

- **Per advertiser / app ID:** `Map<key, SlidingWindowRateLimiter>`
- **Distributed:** Redis sorted sets with `ZREMRANGEBYSCORE` + `ZCARD` (same sliding idea)
- **429 + Retry-After:** return rejection metadata to clients

## Connection to this repo

- [warmup 09](../../warmup/09-sliding-window-sum/) — fixed-size numeric window
- [01-rolling-revenue-average](../01-rolling-revenue-average/) — calendar sliding sum
- [hard 01](../../hard/01-sliding-window-metrics/) — time-based stream window
