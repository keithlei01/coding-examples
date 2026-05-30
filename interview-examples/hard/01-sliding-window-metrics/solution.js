/**
 * Monotonic deque for sliding window maximum.
 */
function processMetricStream(k, queries) {
  const deque = []; // { timestamp, value }, values decreasing
  const results = [];

  for (const q of queries) {
    if (q.type === "push") {
      while (deque.length && deque[deque.length - 1].value <= q.value) {
        deque.pop();
      }
      deque.push({ timestamp: q.timestamp, value: q.value });
    } else if (q.type === "max") {
      const cutoff = q.timestamp - k;
      while (deque.length && deque[0].timestamp <= cutoff) {
        deque.shift();
      }
      results.push(deque.length ? deque[0].value : null);
    }
  }

  return results;
}

module.exports = { processMetricStream };
