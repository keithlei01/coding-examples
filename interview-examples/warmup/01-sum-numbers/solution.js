/**
 * Classic: indexed for-loop (C-style). Easy to read step by step.
 */
function sumNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

module.exports = { sumNumbers };
