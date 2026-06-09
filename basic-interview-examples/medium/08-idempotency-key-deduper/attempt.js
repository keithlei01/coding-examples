/**
 * Implement classifyIdempotentRequests — see problem.md
 * Run: node attempt.js
 */
function classifyIdempotentRequests(requests, windowSec) {
  // TODO
}

// --- tests ---
console.log("example =>", classifyIdempotentRequests([
  { idempotencyKey: "pay-1", timestampSec: 100, amountCents: 500 },
  { idempotencyKey: "pay-1", timestampSec: 200, amountCents: 500 },
  { idempotencyKey: "pay-1", timestampSec: 3700, amountCents: 500 },
], 3600));
// expected: ['accepted', 'duplicate', 'accepted']

console.log("different keys =>", classifyIdempotentRequests([
  { idempotencyKey: "a", timestampSec: 1, amountCents: 100 },
  { idempotencyKey: "b", timestampSec: 2, amountCents: 200 },
  { idempotencyKey: "a", timestampSec: 3, amountCents: 100 },
], 60));
// expected: ['accepted', 'accepted', 'duplicate']

console.log("window expired =>", classifyIdempotentRequests([
  { idempotencyKey: "x", timestampSec: 0, amountCents: 10 },
  { idempotencyKey: "x", timestampSec: 100, amountCents: 10 },
], 50));
// expected: ['accepted', 'accepted'] — 100 - 0 > 50

console.log("empty =>", classifyIdempotentRequests([], 3600)); // expected: []

module.exports = { classifyIdempotentRequests };
