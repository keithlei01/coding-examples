function adSpendByCampaign(records) {
  const centsByCampaign = new Map();

  for (const { campaignId, spendCents } of records) {
    if (!campaignId || !Number.isFinite(spendCents)) continue;
    centsByCampaign.set(campaignId, (centsByCampaign.get(campaignId) || 0) + spendCents);
  }

  const result = [...centsByCampaign.entries()].map(([campaignId, cents]) => ({
    campaignId,
    spendDollars: round2(cents / 100),
  }));

  result.sort((a, b) => {
    if (b.spendDollars !== a.spendDollars) return b.spendDollars - a.spendDollars;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { adSpendByCampaign, round2 };
