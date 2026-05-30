/**
 * Classic: build first window, then slide with subtract/add.
 */
function slidingWindowSums(nums, k) {
  if (k < 1 || k > nums.length) {
    return [];
  }

  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }

  const result = [windowSum];

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    result.push(windowSum);
  }

  return result;
}

module.exports = { slidingWindowSums };
