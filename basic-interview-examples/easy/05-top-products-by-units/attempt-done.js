
function topKProductsByUnits(sales, k) {
  const productMap = new Map();
  for (const item of sales) {
    if (!productMap.has(item.productId)) {
      productMap.set(item.productId, { productId: item.productId, units: 0, revenueCents: 0 });
    }
    let temp = productMap.get(item.productId);
    temp.units = temp.units + item.units;
    temp.revenueCents = temp.revenueCents + item.revenueCents;
    productMap.set(item.productId, temp);
  }

  const all = [...productMap.values()];
  all.sort((a, b) => {
    if (a.units == b.units) {
      if (a.revenueCents == b.revenueCents) {
        return a.productId.localeCompare(b.productId);
      }
      return b.revenueCents - a.revenueCents;
    }
    return a.units - b.units;
  });
  return all.slice(0, k);
}



const sales = [
  { productId: "A", units: 2, revenueCents: 100 },
  { productId: "B", units: 5, revenueCents: 50 },
  { productId: "A", units: 3, revenueCents: 150 },
];
console.log("top 2 =>", topKProductsByUnits(sales, 2));
// expected: [
//   { productId: "A", units: 5, revenueCents: 250 },
//   { productId: "B", units: 5, revenueCents: 50 },
// ]

console.log("tie-break revenue =>", topKProductsByUnits([
  { productId: "B", units: 1, revenueCents: 100 },
  { productId: "A", units: 1, revenueCents: 200 },
], 2));
// expected: A first (same units, higher revenue)

console.log("tie-break productId =>", topKProductsByUnits([
  { productId: "B", units: 1, revenueCents: 100 },
  { productId: "A", units: 1, revenueCents: 100 },
], 2));
// expected: A before B (same units and revenue, id asc)

module.exports = { topKProductsByUnits };
