/**
 * Implement maxCampaignBudget — see problem.md
 * Run: node attempt.js
 */
function maxCampaignBudget(intervals) {
  // TODO: your code here
}

const intervals = [
  { campaignId: "A", startDay: 1, endDay: 3, budgetCents: 100 },
  { campaignId: "B", startDay: 2, endDay: 4, budgetCents: 200 },
  { campaignId: "C", startDay: 5, endDay: 6, budgetCents: 150 },
];
console.log("example =>", maxCampaignBudget(intervals));
// expected: maxBudgetCents 350, scheduled B + C

console.log("empty =>", maxCampaignBudget([]));
// expected: { maxBudgetCents: 0, scheduled: [] }

console.log("duplicate campaignId =>", maxCampaignBudget([
  { campaignId: "A", startDay: 1, endDay: 2, budgetCents: 50 },
  { campaignId: "A", startDay: 5, endDay: 6, budgetCents: 200 },
]));
// pick at most one interval per campaignId (keep higher budget)

module.exports = { maxCampaignBudget };
