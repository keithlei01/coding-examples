const { MinHeap } = require("../09-kth-largest-revenue-day/solution");

function topKLargest(nums, k) {
  if (k <= 0 || nums.length === 0) return [];

  const heap = new MinHeap();
  for (const x of nums) {
    heap.push(x);
    if (heap.size() > k) heap.pop();
  }

  return heap.a.sort((a, b) => b - a);
}

module.exports = { topKLargest };
