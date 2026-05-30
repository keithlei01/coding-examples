function mergeBillingPeriods(periods) {
  const byAdvertiser = new Map();

  for (const p of periods) {
    if (!byAdvertiser.has(p.advertiserId)) byAdvertiser.set(p.advertiserId, []);
    byAdvertiser.get(p.advertiserId).push({ start: p.start, end: p.end });
  }

  const output = [];

  for (const [advertiserId, list] of byAdvertiser) {
    list.sort((a, b) => a.start - b.start);
    let cur = { ...list[0] };

    for (let i = 1; i < list.length; i++) {
      const next = list[i];
      if (next.start <= cur.end + 1) {
        cur.end = Math.max(cur.end, next.end);
      } else {
        output.push({ advertiserId, start: cur.start, end: cur.end });
        cur = { ...next };
      }
    }
    output.push({ advertiserId, start: cur.start, end: cur.end });
  }

  output.sort((a, b) => {
    if (a.advertiserId !== b.advertiserId) {
      return a.advertiserId.localeCompare(b.advertiserId);
    }
    return a.start - b.start;
  });

  return output;
}

module.exports = { mergeBillingPeriods };
