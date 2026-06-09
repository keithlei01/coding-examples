/**
 * Implement cohortRetention — see problem.md
 * Run: node attempt.js
 */
function cohortRetention(events, maxOffset) {
  // 
}

console.log("cohortRetention(example, 1) =>", cohortRetention(
  [
    { userId: "A", weekIndex: 0 },
    { userId: "A", weekIndex: 1 },
    { userId: "B", weekIndex: 0 },
  ],
  1
));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 0.5 }]

console.log("empty =>", cohortRetention([], 2)); // expected: []

console.log("offset 0 only =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
], 0));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }]

console.log("two cohorts =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
  { userId: "B", weekIndex: 1 },
  { userId: "B", weekIndex: 2 },
], 2));
// expected: [
//   { cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 0 }, { cohortWeek: 0, offset: 2, retention: 0 },
//   { cohortWeek: 1, offset: 0, retention: 1 }, { cohortWeek: 1, offset: 1, retention: 1 }, { cohortWeek: 1, offset: 2, retention: 0 },
// ]

console.log("zero retention =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
  { userId: "B", weekIndex: 0 },
], 1));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 0 }]

console.log("dedupe same week =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
  { userId: "A", weekIndex: 0 },
  { userId: "A", weekIndex: 1 },
], 1));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 1 }]

console.log("out of order events =>", cohortRetention([
  { userId: "A", weekIndex: 2 },
  { userId: "A", weekIndex: 0 },
  { userId: "A", weekIndex: 1 },
], 2));
// expected: [
//   { cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 1 }, { cohortWeek: 0, offset: 2, retention: 1 },
// ]

console.log("rounding 4 decimals =>", cohortRetention([
  { userId: "A", weekIndex: 0 },
  { userId: "B", weekIndex: 0 },
  { userId: "C", weekIndex: 0 },
  { userId: "A", weekIndex: 1 },
  { userId: "B", weekIndex: 1 },
], 1));
// expected: [{ cohortWeek: 0, offset: 0, retention: 1 }, { cohortWeek: 0, offset: 1, retention: 0.6667 }]

module.exports = { cohortRetention };
