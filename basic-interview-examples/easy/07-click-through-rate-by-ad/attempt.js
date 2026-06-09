/**
 * Implement ctrByAd — see problem.md
 * Run: node attempt.js
 */
function ctrByAd(events) {
  // TODO
}

function round4(n) {
  return Math.round(n * 10000) / 10000;
}

// --- tests ---
console.log("example =>", ctrByAd([
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "click" },
  { adId: "B", eventType: "impression" },
]));
// expected: [
//   { adId: "A", impressions: 2, clicks: 1, ctr: 0.5 },
//   { adId: "B", impressions: 1, clicks: 0, ctr: 0 },
// ]

console.log("empty =>", ctrByAd([])); // expected: []

console.log("clicks only omitted =>", ctrByAd([
  { adId: "A", eventType: "click" },
]));
// expected: [] — no impressions

console.log("unknown eventType =>", ctrByAd([
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "view" },
  { adId: "A", eventType: "click" },
]));
// expected: [{ adId: "A", impressions: 1, clicks: 1, ctr: 1 }]

console.log("tie-break adId =>", ctrByAd([
  { adId: "B", eventType: "impression" },
  { adId: "B", eventType: "click" },
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "click" },
]));
// expected: A before B (same ctr 1.0)

console.log("rounding =>", ctrByAd([
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "click" },
]));
// expected: ctr 0.3333 (1/3)

module.exports = { ctrByAd, round4 };
