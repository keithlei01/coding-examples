/**
 * Implement evaluateABTest — see problem.md
 * Run: node attempt.js
 */
function evaluateABTest(rows) {
  // TODO: your code here
}

// control: 100/1000 = 0.1, treatment: 120/1000 = 0.12
const rows = [
  ...Array.from({ length: 1000 }, (_, i) => ({ variant: "control", converted: i < 100 ? 1 : 0 })),
  ...Array.from({ length: 1000 }, (_, i) => ({ variant: "treatment", converted: i < 120 ? 1 : 0 })),
];
console.log("example =>", evaluateABTest(rows));
// expected: controlRate 0.1, treatmentRate 0.12, lift 0.2, significant true

console.log("empty =>", evaluateABTest([]));
// expected: rates 0, lift null, significant false

console.log("zero control rate =>", evaluateABTest([
  { variant: "control", converted: 0 },
  { variant: "control", converted: 0 },
  { variant: "treatment", converted: 1 },
]));
// expected: lift null

module.exports = { evaluateABTest };
