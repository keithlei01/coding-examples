/**
 * Parse transaction lines and aggregate revenue by region.
 */
function revenueByRegion(lines) {
  const centsByRegion = new Map();

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) continue;
    const { region, cents } = parsed;
    centsByRegion.set(region, (centsByRegion.get(region) || 0) + cents);
  }

  const result = [...centsByRegion.entries()].map(([region, cents]) => ({
    region,
    revenue: roundDollars(cents / 100),
  }));

  result.sort((a, b) => {
    if (b.revenue !== a.revenue) return b.revenue - a.revenue;
    return a.region.localeCompare(b.region);
  });

  return result;
}

function parseLine(line) {
  if (typeof line !== "string") return null;
  const parts = line.split(",");
  if (parts.length !== 2) return null;
  const region = parts[0].trim();
  const cents = Number(parts[1].trim());
  if (!region || !Number.isFinite(cents)) return null;
  return { region, cents };
}

function roundDollars(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { revenueByRegion, parseLine, roundDollars };
