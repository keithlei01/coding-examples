/**
 * Implement groupByKey — see problem.md
 * Run: node attempt.js
 */

function groupByKey(records, key) {
  // TODO: your code here
}

// --- tests ---
const rows = [
  { region: "US", amount: 10 },
  { region: "EU", amount: 5 },
  { region: "US", amount: 3 },
];

const grouped = groupByKey(rows, "region");
console.log("US length =>", grouped?.US?.length); // expected: 2
console.log("EU length =>", grouped?.EU?.length); // expected: 1
console.log(JSON.stringify(grouped, null, 2));

module.exports = { groupByKey };
