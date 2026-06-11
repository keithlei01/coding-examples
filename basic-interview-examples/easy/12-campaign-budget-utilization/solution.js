function budgetUtilization(spendEvents, budgets) {
  const spendCents = new Map();

  for (const { campaignId, spendCents: cents } of spendEvents) {
    if (!campaignId || !budgets.has(campaignId)) continue;
    if (!Number.isFinite(cents)) continue;
    spendCents.set(campaignId, (spendCents.get(campaignId) || 0) + cents);
  }

  const result = [];
  for (const [campaignId, budget] of budgets) {
    const spent = spendCents.get(campaignId) || 0;
    const spendDollars = round2(spent / 100);
    const budgetDollars = round2(budget / 100);
    const utilizationPct = budgetDollars === 0
      ? 0
      : round2((spendDollars / budgetDollars) * 100);

    result.push({ campaignId, spendDollars, budgetDollars, utilizationPct });
  }

  result.sort((a, b) => {
    if (b.utilizationPct !== a.utilizationPct) return b.utilizationPct - a.utilizationPct;
    return a.campaignId.localeCompare(b.campaignId);
  });

  return result;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { budgetUtilization, round2 };
