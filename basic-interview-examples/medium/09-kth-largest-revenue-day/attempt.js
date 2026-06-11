/**
 * Implement kthLargestRevenue — LC #215 (see problem.md)
 * Run: node attempt.js
 */
function kthLargestRevenue(dailyCents, k) {
  // TODO: min-heap of size k
}

console.log("example =>", kthLargestRevenue([300, 100, 500, 200, 400], 2));
// expected: 400

console.log("k equals 1 =>", kthLargestRevenue([1, 5, 3], 1));
// expected: 5

console.log("k equals n =>", kthLargestRevenue([4, 2, 9], 3));
// expected: 2

console.log("duplicates =>", kthLargestRevenue([5, 5, 5], 2));
// expected: 5

module.exports = { kthLargestRevenue };
