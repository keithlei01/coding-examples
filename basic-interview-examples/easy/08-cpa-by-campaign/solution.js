function cpaByCampaign(events) {
  const spendCents = new Map();
  const conversions = new Map();

  for (const row of events) {
    const { campaignId, eventType } = row;
    if (!campaignId) continue;

    if (eventType === "spend") {
      const amountCents = row.amountCents;
      if (!Number.isFinite(amountCents)) continue;
      spendCents.set(campaignId, (spendCents.get(campaignId) || 0) + amountCents);
    } else if (eventType === "conversion") {
      conversions.set(campaignId, (conversions.get(campaignId) || 0) + 1);
    }
  }

  const result = [];
  for (const [campaignId, conv] of conversions) {
    if (conv === 0) continue;
    const dollars = round2((spendCents.get(campaignId) || 0) / 100);
    result.push({
      campaignId,
      spendDollars: dollars,
      conversions: conv,
      cpaDollars: round2(dollars / conv),
    });
  }

  result.sort((a, b) => {
    if (a.cpaDollars !== b.cpaDollars) return a.cpaDollars - b.cpaDollars;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { cpaByCampaign, round2 };
