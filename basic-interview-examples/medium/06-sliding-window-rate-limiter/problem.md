# 06 — Sliding Window Rate Limiter

## Context (interview-style)

Business APIs (ads, billing, internal tools) throttle traffic: **at most N requests per sliding time window**. Unlike a fixed bucket that resets on the clock, a **sliding window** looks at the last `windowSec` seconds from each incoming request.

You’re on CoderPad. Implement the limiter class; timestamps are **Unix seconds** (integers).

## Task

```javascript
class SlidingWindowRateLimiter {
  constructor(maxRequests, windowSec) {}
  /** Record request if allowed. Returns true if allowed, false if rejected. */
  allow(timestampSec) {}
}
```

**Rules:**

- A request at `timestampSec` is allowed iff fewer than `maxRequests` prior **allowed** requests have timestamps in `(timestampSec - windowSec, timestampSec]` (exclusive left, inclusive right).
- `allow` is called with **non-decreasing** `timestampSec` (typical live traffic).
- Rejected requests are **not** stored.

Also implement a batch helper for tests:

```javascript
function applyRateLimit(requests, maxRequests, windowSec) {
  // requests: number[] of timestamps in order
  // returns boolean[] — allowed or rejected per request
}
```

## Example

```javascript
const limiter = new SlidingWindowRateLimiter(2, 10);
limiter.allow(1);   // true  — window (−9, 1] has 1
limiter.allow(2);   // true  — window (−8, 2] has 2
limiter.allow(3);   // false — window (−7, 3] already has 2
limiter.allow(12);  // true  — ts 1,2 expired; window (2, 12] has 1
```

## What they’re testing

- Sliding window (same family as [warmup 09](../../warmup/09-sliding-window-sum/) and [01-rolling-revenue-average](../01-rolling-revenue-average/))
- Queue / array of timestamps, drop expired from the front
- Not: token bucket math, distributed Redis (verbal follow-ups only)

## Constraints

- `1 <= maxRequests <= 10_000`
- `1 <= windowSec <= 86_400`
- Up to 100_000 `allow` calls

## Follow-ups (verbal)

- Per-user limiter (`Map<userId, timestamps[]>`)?
- Token bucket vs sliding window trade-offs?
- Distributed rate limiting at Meta scale?
