/**
 * Implement filterThreshold — see problem.md
 * Run: node attempt.js
 */

function filterThreshold(records, min) {
  // TODO: your code here
}

// --- tests ---
const result = filterThreshold(
  [
    { id: 1, value: 8 },
    { id: 2, value: 3 },
    { id: 3, value: 5 },
  ],
  5
);
console.log(result);
// expected: [{ id: 1, value: 8 }, { id: 3, value: 5 }]

module.exports = { filterThreshold };
