/**
 * Implement mergeTwoSortedLogs — see problem.md
 * Run: node attempt.js
 */
function mergeTwoSortedLogs(shardA, shardB) {
  // TODO
}

console.log("example =>", mergeTwoSortedLogs([1, 3, 8], [2, 4, 6]));
// expected: [1, 2, 3, 4, 6, 8]

console.log("empty A =>", mergeTwoSortedLogs([], [1, 2]));
// expected: [1, 2]

console.log("empty B =>", mergeTwoSortedLogs([5], []));
// expected: [5]

console.log("all A smaller =>", mergeTwoSortedLogs([1, 2], [3, 4]));
// expected: [1, 2, 3, 4]

module.exports = { mergeTwoSortedLogs };
