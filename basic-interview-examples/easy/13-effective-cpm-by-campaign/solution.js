function effectiveCpmByCampaign(events) {
  const spendCents = new Map();
  const impressions = new Map();

  for (const row of events) {
    const { campaignId, eventType } = row;
    if (!campaignId) continue;

    if (eventType === "spend") {
      const amountCents = row.amountCents;
      if (!Number.isFinite(amountCents)) continue;
      spendCents.set(campaignId, (spendCents.get(campaignId) || 0) + amountCents);
    } else if (eventType === "impression") {
      impressions.set(campaignId, (impressions.get(campaignId) || 0) + 1);
    }
  }

  const result = [];
  for (const [campaignId, imp] of impressions) {
    if (imp === 0) continue;
    const spendDollars = round2((spendCents.get(campaignId) || 0) / 100);
    result.push({
      campaignId,
      spendDollars,
      impressions: imp,
      ecpmDollars: round2((spendDollars / imp) * 1000),
    });
  }

  result.sort((a, b) => {
    if (a.ecpmDollars !== b.ecpmDollars) return a.ecpmDollars - b.ecpmDollars;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { effectiveCpmByCampaign, round2 };
