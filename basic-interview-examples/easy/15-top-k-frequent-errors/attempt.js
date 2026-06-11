/**
 * Implement topKFrequentErrors — LeetCode #347 style (see problem.md)
 * Run: node attempt.js
 */
function topKFrequentErrors(logs, k) {
  // TODO
}

// --- tests ---
console.log("example =>", topKFrequentErrors(
  ["TIMEOUT", "OK", "TIMEOUT", "FAIL", "TIMEOUT", "FAIL"],
  2
));
// expected: [
//   { code: "TIMEOUT", count: 3 },
//   { code: "FAIL", count: 2 },
// ]

console.log("empty logs =>", topKFrequentErrors([], 1));
// expected: []

console.log("tie-break code asc =>", topKFrequentErrors(["B", "A", "A", "B"], 2));
// expected: [{ code: "A", count: 2 }, { code: "B", count: 2 }]

console.log("k equals distinct =>", topKFrequentErrors(["X", "Y"], 2));
// expected: [{ code: "X", count: 1 }, { code: "Y", count: 1 }]

console.log("single code =>", topKFrequentErrors(["ERR", "ERR", "ERR"], 1));
// expected: [{ code: "ERR", count: 3 }]

module.exports = { topKFrequentErrors };
