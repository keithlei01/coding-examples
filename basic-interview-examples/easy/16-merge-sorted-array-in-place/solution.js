/** LeetCode #88 — merge from the end */
function mergeSortedInPlace(A, m, B, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && A[i] > B[j]) {
      A[k--] = A[i--];
    } else {
      A[k--] = B[j--];
    }
  }
}

module.exports = { mergeSortedInPlace };
