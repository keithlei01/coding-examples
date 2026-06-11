function cpcByCampaign(events) {
  const spendCents = new Map();
  const clicks = new Map();

  for (const row of events) {
    const { campaignId, eventType } = row;
    if (!campaignId) continue;

    if (eventType === "spend") {
      const amountCents = row.amountCents;
      if (!Number.isFinite(amountCents)) continue;
      spendCents.set(campaignId, (spendCents.get(campaignId) || 0) + amountCents);
    } else if (eventType === "click") {
      clicks.set(campaignId, (clicks.get(campaignId) || 0) + 1);
    }
  }

  const result = [];
  for (const [campaignId, clickCount] of clicks) {
    if (clickCount === 0) continue;
    const spendDollars = round2((spendCents.get(campaignId) || 0) / 100);
    result.push({
      campaignId,
      spendDollars,
      clicks: clickCount,
      cpcDollars: round2(spendDollars / clickCount),
    });
  }

  result.sort((a, b) => {
    if (a.cpcDollars !== b.cpcDollars) return a.cpcDollars - b.cpcDollars;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { cpcByCampaign, round2 };
