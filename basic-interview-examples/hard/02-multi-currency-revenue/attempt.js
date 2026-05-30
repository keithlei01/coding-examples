/**
 * Implement consolidateRevenueToUsd — see problem.md
 * Run: node attempt.js
 */
function consolidateRevenueToUsd(transactions, fxRates) {
  // TODO: your code here
}

function lookupRate(ratesByCurrency, currency, date) {
  // TODO: optional helper
}

const txns = [
  { id: "t1", currency: "EUR", amount: "100.00", date: "2024-01-15" },
  { id: "t2", currency: "EUR", amount: "50.00", date: "2024-01-20" },
  { id: "t3", currency: "JPY", amount: "1000", date: "2024-01-01" },
];
const fx = [
  { currency: "EUR", date: "2024-01-01", rateToUsd: 1.1 },
  { currency: "EUR", date: "2024-01-15", rateToUsd: 1.08 },
];
console.log("consolidate =>", consolidateRevenueToUsd(txns, fx));
// t1 uses 1.08, t2 uses 1.08, t3 skipped (no JPY rate)

console.log("empty =>", consolidateRevenueToUsd([], []));
// expected: { totalUsd: "0.00", byCurrency: [], skipped: [] }

console.log("invalid amount =>", consolidateRevenueToUsd([
  { id: "bad", currency: "EUR", amount: "not-a-number", date: "2024-01-15" },
], fx));
// expected: skipped includes "bad"

module.exports = { consolidateRevenueToUsd, lookupRate };
