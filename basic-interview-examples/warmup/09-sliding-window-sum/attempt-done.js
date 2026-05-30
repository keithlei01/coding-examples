
function slidingWindowSums(nums, k) {
  if (nums == undefined || nums.length === 0 || k > nums.length) {
    return [];
  }

  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
    if (i == 0) {
      for (let j = i; j < k; j++) {
        sum += nums[j];
      }
    } else {
      sum = sum - nums[i - 1] + nums[i + k - 1];
    }
    result.push(sum);
  }
  return result;
}

// --- tests ---
console.log(slidingWindowSums([1, 2, 3, 4, 5], 3)); // expected: [6, 9, 12]
console.log(slidingWindowSums([10, 20], 1)); // expected: [10, 20]
console.log(slidingWindowSums([10, 20], 3)); // expected: []
console.log(slidingWindowSums([], 2)); // expected: []

console.log("k equals length =>", slidingWindowSums([4, 5, 6], 3)); // expected: [15]

module.exports = { slidingWindowSums };
