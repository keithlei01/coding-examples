/** LeetCode #215 — min-heap of size k */
class MinHeap {
  constructor() {
    this.a = [];
  }
  size() {
    return this.a.length;
  }
  peek() {
    return this.a[0];
  }
  push(x) {
    this.a.push(x);
    this.bubbleUp(this.a.length - 1);
  }
  pop() {
    const n = this.a.length;
    if (n === 1) return this.a.pop();
    const top = this.a[0];
    this.a[0] = this.a.pop();
    this.bubbleDown(0);
    return top;
  }
  bubbleUp(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.a[p] <= this.a[i]) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
      i = p;
    }
  }
  bubbleDown(i) {
    const n = this.a.length;
    while (true) {
      let s = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.a[l] < this.a[s]) s = l;
      if (r < n && this.a[r] < this.a[s]) s = r;
      if (s === i) break;
      [this.a[s], this.a[i]] = [this.a[i], this.a[s]];
      i = s;
    }
  }
}

function kthLargestRevenue(dailyCents, k) {
  const heap = new MinHeap();

  for (const x of dailyCents) {
    heap.push(x);
    if (heap.size() > k) heap.pop();
  }

  return heap.peek();
}

module.exports = { kthLargestRevenue, MinHeap };
