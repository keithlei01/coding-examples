const { MinHeap } = require("../09-kth-largest-revenue-day/solution");

class KthLargestTracker {
  constructor(k, initialSamples) {
    this.k = k;
    this.heap = new MinHeap();
    for (const x of initialSamples) {
      this._push(x);
    }
  }

  _push(x) {
    this.heap.push(x);
    if (this.heap.size() > this.k) {
      this.heap.pop();
    }
  }

  add(sample) {
    this._push(sample);
    return this.heap.peek();
  }
}

module.exports = { KthLargestTracker };
