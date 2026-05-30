/**
 * Implement mergeSorted — see problem.md
 * Run: node attempt.js
 */

function mergeSorted(a, b) {
  // TODO: your code here
}

// --- tests ---
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // expected: [1,2,3,4,5,6]
console.log(mergeSorted([], [1, 2])); // expected: [1, 2]
console.log(mergeSorted([2], [1])); // expected: [1, 2]

module.exports = { mergeSorted };
