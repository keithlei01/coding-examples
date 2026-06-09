/**
 * Implement SlidingWindowRateLimiter + applyRateLimit — see problem.md
 * Run: node attempt.js
 */
class SlidingWindowRateLimiter {
  constructor(maxRequests, windowSec) {
    // TODO
  }

  allow(timestampSec) {
    // TODO
  }
}

function applyRateLimit(requests, maxRequests, windowSec) {
  // TODO
}

// --- tests ---
console.log("applyRateLimit(example) =>", applyRateLimit([1, 2, 3, 12], 2, 10));
// expected: [true, true, false, true]

console.log("at capacity =>", applyRateLimit([0, 1, 2, 3, 61], 3, 60));
// expected: [true, true, true, false, true] — reject at 3; at 61 ts 0–1 expired

console.log("single slot =>", applyRateLimit([5, 5, 6], 1, 10));
// expected: [true, false, false] — duplicate ts rejected; ts 5 still in window at 6

console.log("empty =>", applyRateLimit([], 5, 60)); // expected: []

const limiter = new SlidingWindowRateLimiter(2, 10);
console.log("class API =>", [1, 2, 3, 12].map((t) => limiter.allow(t)));
// expected: [true, true, false, true]

module.exports = { SlidingWindowRateLimiter, applyRateLimit };
