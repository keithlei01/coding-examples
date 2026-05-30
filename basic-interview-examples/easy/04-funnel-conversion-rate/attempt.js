/**
 * Implement funnelConversionRates — see problem.md
 * Run: node attempt.js
 */
function funnelConversionRates(funnel, journeys) {
  // TODO: your code here
}

const funnel = ["landing", "signup", "purchase"];
const journeys = [
  ["landing", "signup"],
  ["landing", "signup", "purchase"],
  ["landing"],
];
console.log("example =>", funnelConversionRates(funnel, journeys));
// expected: [
//   { from: "landing", to: "signup", rate: 0.6667 },
//   { from: "signup", to: "purchase", rate: 0.5 },
// ]

console.log("empty journeys =>", funnelConversionRates(funnel, []));
// expected: [{ from: "landing", to: "signup", rate: 0 }, { from: "signup", to: "purchase", rate: 0 }]

console.log("invalid skip =>", funnelConversionRates(funnel, [["landing", "purchase"]]));
// user reached landing only (purchase without signup doesn't count)

module.exports = { funnelConversionRates };
