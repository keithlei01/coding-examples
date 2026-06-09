function ctrByAd(events) {
  const stats = new Map();

  for (const { adId, eventType } of events) {
    if (eventType !== "impression" && eventType !== "click") continue;
    if (!stats.has(adId)) stats.set(adId, { impressions: 0, clicks: 0 });
    const row = stats.get(adId);
    if (eventType === "impression") row.impressions++;
    else row.clicks++;
  }

  const result = [];
  for (const [adId, { impressions, clicks }] of stats) {
    if (impressions === 0) continue;
    result.push({
      adId,
      impressions,
      clicks,
      ctr: round4(clicks / impressions),
    });
  }

  result.sort((a, b) => {
    if (b.ctr !== a.ctr) return b.ctr - a.ctr;
    return a.adId.localeCompare(b.adId);
  });

  return result;
}

function round4(n) {
  return Math.round(n * 10000) / 10000;
}

module.exports = { ctrByAd, round4 };
