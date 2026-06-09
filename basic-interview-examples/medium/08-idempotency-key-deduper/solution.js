function classifyIdempotentRequests(requests, windowSec) {
  const lastAccepted = new Map();

  return requests.map(({ idempotencyKey, timestampSec }) => {
    const prev = lastAccepted.get(idempotencyKey);
    const windowStart = timestampSec - windowSec;

    if (prev !== undefined && prev > windowStart) {
      return "duplicate";
    }

    lastAccepted.set(idempotencyKey, timestampSec);
    return "accepted";
  });
}

module.exports = { classifyIdempotentRequests };
