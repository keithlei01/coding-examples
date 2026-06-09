function reachAndFrequency(events) {
  const usersByCampaign = new Map();
  const impressionsByCampaign = new Map();

  for (const { userId, campaignId, eventType } of events) {
    if (!userId || !campaignId || eventType !== "impression") continue;

    impressionsByCampaign.set(
      campaignId,
      (impressionsByCampaign.get(campaignId) || 0) + 1
    );

    if (!usersByCampaign.has(campaignId)) {
      usersByCampaign.set(campaignId, new Set());
    }
    usersByCampaign.get(campaignId).add(userId);
  }

  const result = [...impressionsByCampaign.entries()].map(([campaignId, impressions]) => {
    const reach = usersByCampaign.get(campaignId).size;
    return {
      campaignId,
      reach,
      impressions,
      frequency: round2(impressions / reach),
    };
  });

  result.sort((a, b) => {
    if (b.impressions !== a.impressions) return b.impressions - a.impressions;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { reachAndFrequency, round2 };
