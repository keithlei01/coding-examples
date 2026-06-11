/**
 * Implement budgetUtilization — see problem.md
 * Run: node attempt.js
 */
function budgetUtilization(spendEvents, budgets) {
  // TODO
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
const budgets = new Map([["A", 10000], ["B", 5000]]);

console.log("example =>", budgetUtilization([
  { campaignId: "A", spendCents: 7500 },
  { campaignId: "B", spendCents: 5000 },
], budgets));
// expected: B 100% before A 75% (sort desc utilization)

console.log("empty spend =>", budgetUtilization([], new Map([["A", 10000]])));
// expected: [{ campaignId: "A", spendDollars: 0, budgetDollars: 100, utilizationPct: 0 }]

console.log("over budget =>", budgetUtilization([
  { campaignId: "A", spendCents: 12000 },
], new Map([["A", 10000]])));
// expected: utilizationPct 120

console.log("ignore unknown campaign =>", budgetUtilization([
  { campaignId: "X", spendCents: 9999 },
  { campaignId: "A", spendCents: 5000 },
], new Map([["A", 10000]])));
// expected: only A at 50%

console.log("skip invalid rows =>", budgetUtilization([
  { campaignId: "A", spendCents: NaN },
  { campaignId: "", spendCents: 100 },
  { campaignId: "A", spendCents: 2500 },
], new Map([["A", 10000]])));
// expected: A utilization 25%

module.exports = { budgetUtilization, round2 };
