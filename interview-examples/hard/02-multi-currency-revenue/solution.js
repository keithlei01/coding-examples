function consolidateRevenueToUsd(transactions, fxRates) {
  const ratesByCurrency = buildRateIndex(fxRates);
  const skipped = [];
  const localByCurrency = new Map();
  const usdByCurrency = new Map();
  let totalUsd = 0;

  for (const txn of transactions) {
    const amount = parseAmount(txn.amount);
    if (amount == null) {
      skipped.push(txn.id);
      continue;
    }

    const rate = lookupRate(ratesByCurrency, txn.currency, txn.date);
    if (rate == null) {
      skipped.push(txn.id);
      continue;
    }

    const usd = amount * rate;
    localByCurrency.set(txn.currency, round2((localByCurrency.get(txn.currency) || 0) + amount));
    usdByCurrency.set(txn.currency, round2((usdByCurrency.get(txn.currency) || 0) + usd));
    totalUsd += usd;
  }

  const byCurrency = [...localByCurrency.entries()]
    .map(([currency, localTotal]) => ({
      currency,
      localTotal,
      usdTotal: usdByCurrency.get(currency) || 0,
    }))
    .sort((a, b) => a.currency.localeCompare(b.currency));

  return {
    totalUsd: round2(totalUsd).toFixed(2),
    byCurrency,
    skipped,
  };
}

function parseAmount(s) {
  const n = Number(s);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

function buildRateIndex(fxRates) {
  const map = new Map();
  for (const row of fxRates) {
    if (!map.has(row.currency)) map.set(row.currency, []);
    map.get(row.currency).push({ date: row.date, rate: row.rateToUsd });
  }
  for (const list of map.values()) {
    list.sort((a, b) => a.date.localeCompare(b.date));
  }
  return map;
}

function lookupRate(ratesByCurrency, currency, date) {
  const list = ratesByCurrency.get(currency);
  if (!list) return null;
  let lo = 0;
  let hi = list.length - 1;
  let best = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (list[mid].date <= date) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best === -1 ? null : list[best].rate;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { consolidateRevenueToUsd, lookupRate };
