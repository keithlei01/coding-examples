
function mergeSorted(a, b) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++
    }
  }

  // copy remaing
  // while (i < a.length) {
  //   result.push(a[i]);
  //   i++;
  // }

  // while (j < b.length) {
  //   result.push(b[j]);
  //   j++;
  // }

  return result.concat(a.slice(i)).concat(b.slice(j));
}

// --- tests ---
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // expected: [1,2,3,4,5,6]
console.log(mergeSorted([], [1, 2])); // expected: [1, 2]
console.log(mergeSorted([2], [1])); // expected: [1, 2]

module.exports = { mergeSorted };
