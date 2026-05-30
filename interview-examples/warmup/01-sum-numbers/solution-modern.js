/**
 * Modern: for...of or reduce — idiomatic JavaScript.
 */
function sumNumbers(nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { sumNumbers };
