/**
 * Implement rolling7DayAverage — see problem.md
 * Run: node attempt.js
 */
function rolling7DayAverage(data) {
  // TODO: your code here
}

// --- tests ---
const data = [
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-07", revenueCents: 700 },
];
console.log("rolling7DayAverage(example) =>", rolling7DayAverage(data));
// expected: [{ date: "2024-01-01", rollingAvgDollars: 1 }, { date: "2024-01-07", rollingAvgDollars: 2 }]

console.log("empty =>", rolling7DayAverage([])); // expected: []

console.log("sparse gap =>", rolling7DayAverage([
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-08", revenueCents: 700 },
]));
// Jan 8 window includes Jan 2–8; missing days count as 0

module.exports = { rolling7DayAverage };
