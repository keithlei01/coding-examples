/**
 * Implement ctrByAd — see problem.md
 * Run: node attempt.js
 */
function ctrByAd(events) {
  const adImpressions = new Map();
  const adClicks = new Map();

  for (const { adId, eventType } of events) {
    if (!adId || (eventType !== "impression" && eventType !== "click")) continue;

    if (eventType === "impression") {
      if (!adImpressions.has(adId)) {
        adImpressions.set(adId, 0);
      }
      adImpressions.set(adId, adImpressions.get(adId) + 1);
    } else if (eventType === "click") {
      if (!adClicks.has(adId)) {
        adClicks.set(adId, 0);
      }
      adClicks.set(adId, adClicks.get(adId) + 1);
    }
  }

  const result = [...adImpressions.entries()].map(([adId, impressions]) => {
    return { adId: adId, impressions: impressions, clicks: adClicks.get(adId) || 0, ctr: round4((adClicks.get(adId) || 0) / impressions) };
  });

  return result.sort((a, b) => {
    if (b.ctr !== a.ctr) return b.ctr - a.ctr;
    return a.adId.localeCompare(b.adId);
  });
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
