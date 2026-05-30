/**
 * Implement cohortRetention — see problem.md
 * Run: node attempt.js
 */
function cohortRetention(events, maxOffset) {
  // TODO: your code here
}

console.log("cohortRetention(example, 1) =>", cohortRetention(
  [
    { userId: "A", weekIndex: 0 },
    { userId: "A", weekIndex: 1 },
    { userId: "B", weekIndex: 0 },
  ],
  1
));
// expected cohort 0: offset 0 => 1.0, offset 1 => 0.5

console.log("empty =>", cohortRetention([], 2)); // expected: []

console.log("offset 0 only =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
], 0));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }]

module.exports = { cohortRetention };
