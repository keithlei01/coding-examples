/**
 * LeetCode #1 — Two Sum. O(n) time, O(n) space.
 */
function twoSumReconciliation(amountsCents, targetCents) {
  const seen = new Map(); // amount -> index

  for (let j = 0; j < amountsCents.length; j++) {
    const need = targetCents - amountsCents[j];
    if (seen.has(need)) {
      return [seen.get(need), j];
    }
    seen.set(amountsCents[j], j);
  }

  return [];
}

module.exports = { twoSumReconciliation };
