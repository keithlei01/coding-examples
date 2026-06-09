/**
 * Implement roasByCampaign — see problem.md
 * Run: node attempt.js
 */
function roasByCampaign(rows) {
  // TODO
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function round4(n) {
  return Math.round(n * 10000) / 10000;
}

// --- tests ---
console.log("example =>", roasByCampaign([
  { campaignId: "A", revenueCents: 5000, spendCents: 1000 },
  { campaignId: "A", revenueCents: 3000, spendCents: 1000 },
  { campaignId: "B", revenueCents: 2000, spendCents: 2000 },
]));
// expected: A roas 4.0 before B roas 1.0

console.log("empty =>", roasByCampaign([])); // expected: []

console.log("zero spend omitted =>", roasByCampaign([
  { campaignId: "A", revenueCents: 5000, spendCents: 0 },
]));
// expected: []

console.log("tie-break campaignId =>", roasByCampaign([
  { campaignId: "B", revenueCents: 1000, spendCents: 1000 },
  { campaignId: "A", revenueCents: 1000, spendCents: 1000 },
]));
// expected: A before B (same roas 1.0)

console.log("rounding roas =>", roasByCampaign([
  { campaignId: "A", revenueCents: 1000, spendCents: 3000 },
]));
// expected: roas 0.3333

console.log("refund spend =>", roasByCampaign([
  { campaignId: "A", revenueCents: 1000, spendCents: 500 },
  { campaignId: "A", revenueCents: 0, spendCents: -500 },
]));
// expected: [] — net spend 0, omitted

module.exports = { roasByCampaign, round2, round4 };
