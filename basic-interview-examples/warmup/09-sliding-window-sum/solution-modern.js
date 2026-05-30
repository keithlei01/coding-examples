/**
 * Modern: same O(n) slide; for-loop with let windowSum.
 */
function slidingWindowSums(nums, k) {
  if (k < 1 || k > nums.length) return [];

  let windowSum = nums.slice(0, k).reduce((s, n) => s + n, 0);
  const result = [windowSum];

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    result.push(windowSum);
  }

  return result;
}

module.exports = { slidingWindowSums };
