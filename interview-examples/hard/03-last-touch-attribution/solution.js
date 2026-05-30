function lastTouchAttribution(touches, conversions) {
  const touchesByUser = new Map();

  for (const t of touches) {
    if (!touchesByUser.has(t.userId)) touchesByUser.set(t.userId, []);
    touchesByUser.get(t.userId).push(t);
  }

  for (const list of touchesByUser.values()) {
    list.sort((a, b) => a.timestamp - b.timestamp);
  }

  const agg = new Map();

  function bump(channel, revenueCents) {
    const cur = agg.get(channel) || { channel, conversions: 0, revenueCents: 0 };
    cur.conversions += 1;
    cur.revenueCents += revenueCents;
    agg.set(channel, cur);
  }

  for (const conv of conversions) {
    const channel = lastTouchChannel(touchesByUser.get(conv.userId), conv.timestamp);
    bump(channel, conv.revenueCents);
  }

  return [...agg.values()].sort((a, b) => {
    if (b.revenueCents !== a.revenueCents) return b.revenueCents - a.revenueCents;
    return a.channel.localeCompare(b.channel);
  });
}

function lastTouchChannel(sortedTouches, convTime) {
  if (!sortedTouches?.length) return "organic";

  let lo = 0;
  let hi = sortedTouches.length - 1;
  let best = -1;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (sortedTouches[mid].timestamp < convTime) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return best === -1 ? "organic" : sortedTouches[best].channel;
}

module.exports = { lastTouchAttribution, lastTouchChannel };
