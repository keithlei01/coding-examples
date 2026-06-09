/**
 * Implement cpaByCampaign — see problem.md
 * Run: node attempt.js
 */
function cpaByCampaign(events) {
  const campaignSpends = new Map();
  const campaignConversions = new Map();

  for (const { campaignId, eventType, amountCents } of events) {
    if (!campaignId || (eventType !== "spend" && eventType !== "conversion")) {
      continue;
    }

    if (eventType === "spend") {
      if (!Number.isFinite(amountCents)) continue;
      if (!campaignSpends.has(campaignId)) {
        campaignSpends.set(campaignId, 0);
      }
      campaignSpends.set(campaignId, campaignSpends.get(campaignId) + amountCents);
    } else if (eventType === "conversion") {
      if (!campaignConversions.has(campaignId)) {
        campaignConversions.set(campaignId, 0);
      }
      campaignConversions.set(campaignId, campaignConversions.get(campaignId) + 1);
    }
  }

  const results = [...campaignConversions.entries()].map(([campaignId, conversions]) => {
    const spendDollars = round2(campaignSpends.get(campaignId) || 0) / 100;
    return {
      campaignId: campaignId,
      spendDollars: spendDollars,
      conversions: conversions,
      cpaDollars: round2(spendDollars / conversions)
    }
  });

  return results.sort((a, b) => {
    if (a.cpaDollars === b.cpaDollars)
      return a.campaignId.localeCompare(b.campaignId);
    return a.cpaDollars - b.cpaDollars;
  });
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
console.log("example =>", cpaByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 1000 },
  { campaignId: "A", eventType: "conversion" },
  { campaignId: "A", eventType: "conversion" },
  { campaignId: "B", eventType: "spend", amountCents: 500 },
]));
// expected: [{ campaignId: "A", spendDollars: 10, conversions: 2, cpaDollars: 5 }]

console.log("empty =>", cpaByCampaign([])); // expected: []

console.log("spend only omitted =>", cpaByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 1000 },
]));
// expected: []

console.log("sort by cpa =>", cpaByCampaign([
  { campaignId: "high", eventType: "spend", amountCents: 1000 },
  { campaignId: "high", eventType: "conversion" },
  { campaignId: "low", eventType: "spend", amountCents: 1000 },
  { campaignId: "low", eventType: "conversion" },
  { campaignId: "low", eventType: "conversion" },
]));
// expected: low cpa $5 before high cpa $10

console.log("refund lowers cpa =>", cpaByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 1000 },
  { campaignId: "A", eventType: "spend", amountCents: -200 },
  { campaignId: "A", eventType: "conversion" },
]));
// expected: spendDollars 8, cpaDollars 8

module.exports = { cpaByCampaign, round2 };
