/**
 * Implement countOccurrences — see problem.md
 * Run: node attempt.js
 */

function countOccurrences(items) {
  // TODO: your code here
}

// --- tests ---
const m1 = countOccurrences(["US", "EU", "US", "US"]);
console.log("US count =>", m1?.get("US")); // expected: 3
console.log("EU count =>", m1?.get("EU")); // expected: 1

const m2 = countOccurrences([]);
console.log("empty map size =>", m2?.size); // expected: 0

module.exports = { countOccurrences };
