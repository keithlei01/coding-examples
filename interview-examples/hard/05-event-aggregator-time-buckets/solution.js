class MetricAggregator {
  constructor(bucketSeconds) {
    this.bucketSeconds = bucketSeconds;
    /** @type {Map<string, Map<number, number>>} metric -> bucketStart -> sum */
    this.buckets = new Map();
  }

  _bucketStart(timestamp) {
    return Math.floor(timestamp / this.bucketSeconds) * this.bucketSeconds;
  }

  record({ metric, timestamp, value }) {
    const start = this._bucketStart(timestamp);
    if (!this.buckets.has(metric)) this.buckets.set(metric, new Map());
    const m = this.buckets.get(metric);
    m.set(start, (m.get(start) || 0) + value);
  }

  query(metric, from, to) {
    const m = this.buckets.get(metric);
    if (!m) return 0;

    let sum = 0;
    const firstBucket = this._bucketStart(from);
    const lastBucket = this._bucketStart(to);

    for (let b = firstBucket; b <= lastBucket; b += this.bucketSeconds) {
      if (b + this.bucketSeconds - 1 >= from && b <= to) {
        sum += m.get(b) || 0;
      }
    }
    return sum;
  }

  topMetrics(k, from, to) {
    const totals = [];

    for (const [metric, bucketMap] of this.buckets) {
      let total = 0;
      for (const [bucketStart, val] of bucketMap) {
        const bucketEnd = bucketStart + this.bucketSeconds - 1;
        if (bucketStart <= to && bucketEnd >= from) {
          total += val;
        }
      }
      if (total !== 0) totals.push({ metric, total });
    }

    totals.sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      return a.metric.localeCompare(b.metric);
    });

    return totals.slice(0, k);
  }
}

module.exports = { MetricAggregator };
