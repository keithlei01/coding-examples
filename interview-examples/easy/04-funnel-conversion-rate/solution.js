function funnelConversionRates(funnel, journeys) {
  const stepIndex = new Map(funnel.map((s, i) => [s, i]));
  const reached = funnel.map(() => 0);

  for (const journey of journeys) {
    const maxStep = deepestValidStep(journey, funnel, stepIndex);
    for (let i = 0; i <= maxStep; i++) {
      reached[i]++;
    }
  }

  const results = [];
  for (let i = 0; i < funnel.length - 1; i++) {
    const fromCount = reached[i];
    const toCount = reached[i + 1];
    const rate = fromCount === 0 ? 0 : round4(toCount / fromCount);
    results.push({ from: funnel[i], to: funnel[i + 1], rate });
  }
  return results;
}

/** Longest valid prefix index in funnel ( -1 if none ). */
function deepestValidStep(journey, funnel, stepIndex) {
  let expected = 0;
  let deepest = -1;

  for (const step of journey) {
    const idx = stepIndex.get(step);
    if (idx === undefined) continue; // unknown step ignored
    if (idx === expected) {
      deepest = idx;
      expected++;
      if (expected === funnel.length) break;
    } else if (idx < expected) {
      // already passed — still counts as reached
      deepest = Math.max(deepest, idx);
    } else {
      // out of order — stop strict prefix extension
      break;
    }
  }
  return deepest;
}

function round4(x) {
  return Math.round(x * 10000) / 10000;
}

module.exports = { funnelConversionRates, deepestValidStep };
