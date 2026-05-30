/**
 * Implement parseCsvLine — see problem.md
 * Run: node attempt.js
 */

function parseCsvLine(line) {
  // TODO: your code here
}

// --- tests ---
console.log(parseCsvLine(" Alice , 30 , NYC "));
// expected: { name: "Alice", age: 30, city: "NYC" }

console.log(parseCsvLine("Bob,unknown,LA"));
// expected: { name: "Bob", age: "unknown", city: "LA" }

module.exports = { parseCsvLine };
