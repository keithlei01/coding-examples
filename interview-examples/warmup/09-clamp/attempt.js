/**
 * Implement clamp — see problem.md
 * Run: node attempt.js
 */

function clamp(n, min, max) {
  // TODO: your code here
}

// --- tests ---
console.log(clamp(150, 0, 100)); // expected: 100
console.log(clamp(-5, 0, 100)); // expected: 0
console.log(clamp(42, 0, 100)); // expected: 42

module.exports = { clamp };
