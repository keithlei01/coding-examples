/**
 * Implement adSpendByCampaign — see problem.md
 * Run: node attempt.js
 */
function adSpendByCampaign(records) {
  const campaignSpend = new Map();
  for (const { campaignId, spendCents } of records) {
    if (!campaignId || !Number.isFinite(spendCents)) continue;

    if (!campaignSpend.has(campaignId)) {
      campaignSpend.set(campaignId, 0);
    }
    campaignSpend.set(campaignId, campaignSpend.get(campaignId) + spendCents);
  }

  const result = [...campaignSpend.entries()].map(([campaignId, spend]) => {
    return { campaignId: campaignId, spendDollars: round2(spend / 100) };
  });

  return result.sort((a, b) => {
    return (a.spendDollars === b.spendDollars) ? a.campaignId.localeCompare(b.campaignId) : b.spendDollars - a.spendDollars;
  });
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
console.log("example =>", adSpendByCampaign([
  { campaignId: "summer", spendCents: 5000 },
  { campaignId: "winter", spendCents: 3000 },
  { campaignId: "summer", spendCents: 2500 },
]));
// expected: [{ campaignId: "summer", spendDollars: 75 }, { campaignId: "winter", spendDollars: 30 }]

console.log("empty =>", adSpendByCampaign([])); // expected: []

console.log("refund =>", adSpendByCampaign([
  { campaignId: "A", spendCents: 1000 },
  { campaignId: "A", spendCents: -300 },
]));
// expected: [{ campaignId: "A", spendDollars: 7 }]

console.log("tie-break campaignId =>", adSpendByCampaign([
  { campaignId: "B", spendCents: 500 },
  { campaignId: "A", spendCents: 500 },
]));
// expected: [{ campaignId: "A", spendDollars: 5 }, { campaignId: "B", spendDollars: 5 }]

console.log("skip invalid =>", adSpendByCampaign([
  { campaignId: "", spendCents: 100 },
  { campaignId: "A", spendCents: NaN },
  { campaignId: "A", spendCents: 200 },
]));
// expected: [{ campaignId: "A", spendDollars: 2 }]

module.exports = { adSpendByCampaign, round2 };
