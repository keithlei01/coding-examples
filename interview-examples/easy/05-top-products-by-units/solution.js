function topKProductsByUnits(sales, k) {
  const agg = new Map();

  for (const { productId, units, revenueCents } of sales) {
    const cur = agg.get(productId) || { productId, units: 0, revenueCents: 0 };
    cur.units += units;
    cur.revenueCents += revenueCents;
    agg.set(productId, cur);
  }

  const all = [...agg.values()];
  all.sort(compareProducts);

  return all.slice(0, k);
}

function compareProducts(a, b) {
  if (b.units !== a.units) return b.units - a.units;
  if (b.revenueCents !== a.revenueCents) return b.revenueCents - a.revenueCents;
  return a.productId.localeCompare(b.productId);
}

module.exports = { topKProductsByUnits, compareProducts };
