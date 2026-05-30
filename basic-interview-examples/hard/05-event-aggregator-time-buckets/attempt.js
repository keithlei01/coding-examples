/**
 * Implement MetricAggregator — see problem.md
 * Run: node attempt.js
 */
class MetricAggregator {
  constructor(bucketSeconds) {
    this.bucketSeconds = bucketSeconds;
    this.buckets = new Map();
  }

  record({ metric, timestamp, value }) {
    // TODO: your code here
  }

  query(metric, from, to) {
    // TODO: your code here
    return 0;
  }

  topMetrics(k, from, to) {
    // TODO: your code here
    return [];
  }
}

const agg = new MetricAggregator(60);
agg.record({ metric: "spend", timestamp: 0, value: 10 });
agg.record({ metric: "spend", timestamp: 30, value: 5 });
console.log("query =>", agg.query("spend", 0, 59)); // expected: 15
console.log("unknown metric =>", agg.query("clicks", 0, 59)); // expected: 0
console.log("topMetrics =>", agg.topMetrics(1, 0, 59)); // expected: [{ metric: "spend", total: 15 }]

console.log("empty range =>", agg.query("spend", 100, 200)); // expected: 0

module.exports = { MetricAggregator };
