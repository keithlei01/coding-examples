/**
 * Weighted interval scheduling: maximize budget with no day overlap.
 * One interval per campaignId — keep max budget per id, then classic DP.
 */
function maxCampaignBudget(intervals) {
  const bestPerCampaign = new Map();
  for (const iv of intervals) {
    const prev = bestPerCampaign.get(iv.campaignId);
    if (!prev || iv.budgetCents > prev.budgetCents) {
      bestPerCampaign.set(iv.campaignId, iv);
    }
  }

  const jobs = [...bestPerCampaign.values()].sort((a, b) => a.endDay - b.endDay);
  const n = jobs.length;
  const ends = jobs.map((j) => j.endDay);

  function latestNonOverlap(i) {
    const start = jobs[i].startDay;
    let lo = 0;
    let hi = i - 1;
    let ans = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (jobs[mid].endDay < start) {
        ans = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return ans;
  }

  const dp = new Array(n).fill(0);
  const take = new Array(n).fill(false);
  const p = jobs.map((_, i) => latestNonOverlap(i));

  for (let i = 0; i < n; i++) {
    const incl = jobs[i].budgetCents + (p[i] >= 0 ? dp[p[i]] : 0);
    const excl = i > 0 ? dp[i - 1] : 0;
    if (incl >= excl) {
      dp[i] = incl;
      take[i] = true;
    } else {
      dp[i] = excl;
    }
  }

  const scheduled = [];
  let i = n - 1;
  while (i >= 0) {
    if (take[i]) {
      scheduled.push(jobs[i]);
      i = p[i];
    } else {
      i--;
    }
  }

  scheduled.reverse();

  return {
    maxBudgetCents: n ? dp[n - 1] : 0,
    scheduled,
  };
}

module.exports = { maxCampaignBudget };
