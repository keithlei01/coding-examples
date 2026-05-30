/**
 * Implement mergeBillingPeriods — see problem.md
 * Run: node attempt.js
 */
function mergeBillingPeriods(periods) {
  // TODO: your code here
}

console.log("mergeBillingPeriods(example) =>", mergeBillingPeriods([
  { advertiserId: "A", start: 1, end: 5 },
  { advertiserId: "A", start: 6, end: 10 },
  { advertiserId: "A", start: 8, end: 12 },
]));
// expected: [{ advertiserId: "A", start: 1, end: 12 }]

console.log("empty =>", mergeBillingPeriods([])); // expected: []

console.log("touching merge =>", mergeBillingPeriods([
  { advertiserId: "A", start: 1, end: 5 },
  { advertiserId: "A", start: 6, end: 10 },
]));
// expected: [{ advertiserId: "A", start: 1, end: 10 }]

console.log("separate advertisers =>", mergeBillingPeriods([
  { advertiserId: "A", start: 1, end: 3 },
  { advertiserId: "B", start: 1, end: 3 },
]));
// expected: two intervals, not merged across advertisers

module.exports = { mergeBillingPeriods };
