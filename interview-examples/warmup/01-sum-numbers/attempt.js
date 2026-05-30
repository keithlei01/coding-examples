/**
 * Implement sumNumbers — see problem.md
 * Run: node attempt.js
 */
function sumNumbers(nums) {
  // let sum = 0;
  // for (i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }
  // return sum;

  return nums.reduce((sum, i) => sum + i, 0);
}


// --- tests (uncomment as you go) ---
console.log("sumNumbers([10, 20, 5]) =>", sumNumbers([10, 20, 5])); // expected: 35
console.log("sumNumbers([]) =>", sumNumbers([])); // expected: 0
console.log("sumNumbers([-2, 2]) =>", sumNumbers([-2, 2])); // expected: 0

module.exports = { sumNumbers };
