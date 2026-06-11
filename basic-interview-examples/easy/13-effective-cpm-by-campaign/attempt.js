/**
 * Implement effectiveCpmByCampaign — see problem.md
 * Run: node attempt.js
 */
function effectiveCpmByCampaign(events) {
  // TODO
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
console.log("example =>", effectiveCpmByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 500 },
  { campaignId: "A", eventType: "impression" },
  { campaignId: "A", eventType: "impression" },
]));
// expected: [{ campaignId: "A", spendDollars: 5, impressions: 2, ecpmDollars: 2500 }]

console.log("empty =>", effectiveCpmByCampaign([])); // expected: []

console.log("impressions only omitted =>", effectiveCpmByCampaign([
  { campaignId: "A", eventType: "impression" },
]));
// expected: [{ campaignId: "A", spendDollars: 0, impressions: 1, ecpmDollars: 0 }]

console.log("compare campaigns =>", effectiveCpmByCampaign([
  { campaignId: "cheap", eventType: "spend", amountCents: 1000 },
  { campaignId: "cheap", eventType: "impression" },
  { campaignId: "cheap", eventType: "impression" },
  { campaignId: "cheap", eventType: "impression" },
  { campaignId: "cheap", eventType: "impression" },
  { campaignId: "dear", eventType: "spend", amountCents: 1000 },
  { campaignId: "dear", eventType: "impression" },
]));
// cheap: $10/4 imp × 1000 = 2500; dear: $10/1 × 1000 = 10000 → cheap first

module.exports = { effectiveCpmByCampaign, round2 };
