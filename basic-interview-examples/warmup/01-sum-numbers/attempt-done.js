/**
 * Implement sumNumbers — see problem.md
 * Run: node attempt.js
 */
function sumNumbers(nums) {
  return nums.reduce((sum, n) => sum + n, 0);

  // let sum = 0;
  // for (const n of nums) {
  //   sum += n;
  // }
  // return sum;
}

// --- tests (uncomment as you go) ---
console.log("sumNumbers([10, 20, 5]) =>", sumNumbers([10, 20, 5])); // expected: 35
console.log("sumNumbers([]) =>", sumNumbers([])); // expected: 0
console.log("sumNumbers([-2, 2]) =>", sumNumbers([-2, 2])); // expected: 0

module.exports = { sumNumbers };
