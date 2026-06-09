class SlidingWindowRateLimiter {
  constructor(maxRequests, windowSec) {
    this.maxRequests = maxRequests;
    this.windowSec = windowSec;
    this.timestamps = [];
  }

  allow(timestampSec) {
    const windowStart = timestampSec - this.windowSec;
    while (this.timestamps.length && this.timestamps[0] <= windowStart) {
      this.timestamps.shift();
    }
    if (this.timestamps.length >= this.maxRequests) {
      return false;
    }
    this.timestamps.push(timestampSec);
    return true;
  }
}

function applyRateLimit(requests, maxRequests, windowSec) {
  const limiter = new SlidingWindowRateLimiter(maxRequests, windowSec);
  return requests.map((ts) => limiter.allow(ts));
}

module.exports = { SlidingWindowRateLimiter, applyRateLimit };
