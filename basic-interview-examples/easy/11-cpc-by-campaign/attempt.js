/**
 * Implement cpcByCampaign — see problem.md
 * Run: node attempt.js
 */
function cpcByCampaign(events) {
  // TODO
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
console.log("example =>", cpcByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 600 },
  { campaignId: "A", eventType: "click" },
  { campaignId: "A", eventType: "click" },
  { campaignId: "A", eventType: "click" },
]));
// expected: [{ campaignId: "A", spendDollars: 6, clicks: 3, cpcDollars: 2 }]

console.log("empty =>", cpcByCampaign([])); // expected: []

console.log("spend only omitted =>", cpcByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 500 },
]));
// expected: []

console.log("sort by cpc =>", cpcByCampaign([
  { campaignId: "high", eventType: "spend", amountCents: 1000 },
  { campaignId: "high", eventType: "click" },
  { campaignId: "low", eventType: "spend", amountCents: 1000 },
  { campaignId: "low", eventType: "click" },
  { campaignId: "low", eventType: "click" },
]));
// expected: low cpc $5 before high cpc $10

module.exports = { cpcByCampaign, round2 };
