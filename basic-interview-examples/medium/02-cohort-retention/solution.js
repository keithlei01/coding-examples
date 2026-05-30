function cohortRetention(events, maxOffset) {
  const firstWeek = new Map();
  const activeWeeks = new Map();

  for (const { userId, weekIndex } of events) {
    if (!firstWeek.has(userId) || weekIndex < firstWeek.get(userId)) {
      firstWeek.set(userId, weekIndex);
    }
    if (!activeWeeks.has(userId)) activeWeeks.set(userId, new Set());
    activeWeeks.get(userId).add(weekIndex);
  }

  const cohortSize = new Map();
  const cohortActive = new Map();

  for (const [userId, cohort] of firstWeek) {
    cohortSize.set(cohort, (cohortSize.get(cohort) || 0) + 1);
    const weeks = activeWeeks.get(userId);
    for (const w of weeks) {
      const offset = w - cohort;
      if (offset < 0 || offset > maxOffset) continue;
      const key = `${cohort}:${offset}`;
      if (!cohortActive.has(key)) cohortActive.set(key, new Set());
      cohortActive.get(key).add(userId);
    }
  }

  const cohorts = [...cohortSize.keys()].sort((a, b) => a - b);
  const result = [];

  for (const cohortWeek of cohorts) {
    const size = cohortSize.get(cohortWeek);
    for (let offset = 0; offset <= maxOffset; offset++) {
      const key = `${cohortWeek}:${offset}`;
      const active = cohortActive.get(key)?.size || 0;
      result.push({
        cohortWeek,
        offset,
        retention: round4(active / size),
      });
    }
  }

  return result;
}

function round4(x) {
  return Math.round(x * 10000) / 10000;
}

module.exports = { cohortRetention };
