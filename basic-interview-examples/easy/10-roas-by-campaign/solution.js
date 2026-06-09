function roasByCampaign(rows) {
  const revenueCents = new Map();
  const spendCents = new Map();

  for (const row of rows) {
    const { campaignId, revenueCents: rev, spendCents: spend } = row;
    if (!campaignId) continue;
    if (!Number.isFinite(rev) || !Number.isFinite(spend)) continue;

    revenueCents.set(campaignId, (revenueCents.get(campaignId) || 0) + rev);
    spendCents.set(campaignId, (spendCents.get(campaignId) || 0) + spend);
  }

  const result = [];
  for (const [campaignId, spend] of spendCents) {
    if (spend <= 0) continue;
    const revenue = revenueCents.get(campaignId) || 0;
    const revenueDollars = round2(revenue / 100);
    const spendDollars = round2(spend / 100);
    result.push({
      campaignId,
      revenueDollars,
      spendDollars,
      roas: round4(revenueDollars / spendDollars),
    });
  }

  result.sort((a, b) => {
    if (b.roas !== a.roas) return b.roas - a.roas;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function round4(n) {
  return Math.round(n * 10000) / 10000;
}

module.exports = { roasByCampaign, round2, round4 };
