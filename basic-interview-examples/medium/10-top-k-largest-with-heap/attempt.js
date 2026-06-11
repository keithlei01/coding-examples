/**
 * Implement topKLargest — see problem.md
 * Run: node attempt.js
 */
function topKLargest(nums, k) {
  // TODO
}

console.log("example =>", topKLargest([3, 1, 4, 1, 5, 9, 2], 3));
// expected: [9, 5, 4]

console.log("k equals n =>", topKLargest([2, 1], 2));
// expected: [2, 1]

console.log("empty =>", topKLargest([], 1));
// expected: []

module.exports = { topKLargest };
