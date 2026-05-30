function rolling7DayAverage(data) {
  const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const centsByDate = new Map(sorted.map((d) => [d.date, d.revenueCents]));

  return sorted.map(({ date }) => {
    let sumCents = 0;
    for (let i = 0; i < 7; i++) {
      const d = addDays(date, -i);
      sumCents += centsByDate.get(d) || 0;
    }
    return {
      date,
      rollingAvgDollars: round2(sumCents / 7 / 100),
    };
  });
}

function addDays(isoDate, delta) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + delta);
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { rolling7DayAverage, addDays };
