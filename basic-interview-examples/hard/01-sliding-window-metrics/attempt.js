/**
 * Implement processMetricStream — see problem.md
 * Run: node attempt.js
 */
function processMetricStream(k, queries) {
  // TODO: your code here
}

const k = 300;
const queries = [
  { type: "push", timestamp: 100, value: 10 },
  { type: "push", timestamp: 200, value: 25 },
  { type: "max", timestamp: 250 },
  { type: "push", timestamp: 500, value: 5 },
  { type: "max", timestamp: 500 },
];
console.log("processMetricStream =>", processMetricStream(k, queries)); // expected: [25, 25]

console.log("empty window =>", processMetricStream(60, [{ type: "max", timestamp: 10 }])); // expected: [null]

console.log("max before any push =>", processMetricStream(300, [
  { type: "max", timestamp: 100 },
  { type: "push", timestamp: 200, value: 5 },
  { type: "max", timestamp: 200 },
])); // expected: [null, 5]

module.exports = { processMetricStream };
