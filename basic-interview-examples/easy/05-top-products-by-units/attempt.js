/**
 * Implement topKProductsByUnits — see problem.md
 * Run: node attempt.js
 */
function topKProductsByUnits(sales, k) {
  // TODO: your code here
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
