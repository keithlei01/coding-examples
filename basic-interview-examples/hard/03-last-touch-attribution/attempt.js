/**
 * Implement lastTouchAttribution — see problem.md
 * Run: node attempt.js
 */
function lastTouchAttribution(touches, conversions) {
  // TODO: your code here
}

function lastTouchChannel(sortedTouches, convTime) {
  // TODO: optional helper
}

const touches = [
  { userId: "u1", channel: "email", timestamp: 10 },
  { userId: "u1", channel: "ads", timestamp: 20 },
];
const conversions = [{ userId: "u1", revenueCents: 500, timestamp: 25 }];
console.log("example =>", lastTouchAttribution(touches, conversions));
// expected: [{ channel: "ads", conversions: 1, revenueCents: 500 }]

console.log("no touches =>", lastTouchAttribution([], conversions));
// expected: [{ channel: "organic", conversions: 1, revenueCents: 500 }]

console.log("touch at conversion time =>", lastTouchAttribution(
  [{ userId: "u1", channel: "ads", timestamp: 25 }],
  [{ userId: "u1", revenueCents: 100, timestamp: 25 }]
));
// touch at t=25 excluded (strict <) → organic

module.exports = { lastTouchAttribution, lastTouchChannel };
