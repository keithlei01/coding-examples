# 08 — Idempotency Key Deduper

## Context (interview-style)

Payment and billing APIs accept an **idempotency key** so client retries don’t double-charge. If the same key appears again within a **dedup window**, treat it as a **duplicate**; otherwise accept it as new.

You’re on CoderPad. Timestamps are Unix **seconds** (integers), non-decreasing — same convention as [06-sliding-window-rate-limiter](../06-sliding-window-rate-limiter/).

## Task

```javascript
function classifyIdempotentRequests(requests, windowSec) {
  // requests: { idempotencyKey, timestampSec, amountCents }[]
  // returns: ('accepted' | 'duplicate')[]  — same length as requests
}
```

**Rules:**

- First request for a key in the active window → `'accepted'`.
- Another request with the **same key** while the previous **accepted** request for that key has `timestampSec` in `(current - windowSec, current]` → `'duplicate'`.
- If the prior accepted request for that key is **outside** the window, the new request → `'accepted'` (key effectively reset).
- Duplicates are **not** recorded (don’t extend the window for that key).

## Example

```javascript
classifyIdempotentRequests([
  { idempotencyKey: "pay-1", timestampSec: 100, amountCents: 500 },
  { idempotencyKey: "pay-1", timestampSec: 200, amountCents: 500 },
  { idempotencyKey: "pay-1", timestampSec: 3700, amountCents: 500 },
], 3600);
// → ['accepted', 'duplicate', 'accepted']
```

## What they’re testing

- `Map<key, lastAcceptedTimestamp>` + sliding window expiry (same mechanic as rate limiter, different business meaning)
- Ordered stream processing
- Not: persisting response bodies for replay (verbal follow-up)

## Constraints

- `1 <= windowSec <= 86_400`
- Up to 100_000 requests; keys are strings.

## Follow-ups (verbal)

- Return cached response for duplicates?
- Per-merchant vs global keys?
- Store keys in DB with TTL vs in-memory?
