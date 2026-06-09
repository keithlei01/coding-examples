function processDailySpend(events, dailyCaps) {
  const totals = new Map();

  return events.map(({ advertiserId, date, spendCents }) => {
    const key = `${advertiserId}|${date}`;
    const cap = dailyCaps.get(advertiserId);
    const current = totals.get(key) || 0;

    if (current + spendCents > cap) {
      return {
        advertiserId,
        date,
        spendCents,
        allowed: false,
        dailyTotalCents: current,
      };
    }

    const next = current + spendCents;
    totals.set(key, next);
    return {
      advertiserId,
      date,
      spendCents,
      allowed: true,
      dailyTotalCents: next,
    };
  });
}

module.exports = { processDailySpend };
