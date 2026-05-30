
function findDuplicates(arr) {
  const seen = new Set();  // if in set before, keep
  const keep = new Set();

  arr = arr.filter((n) => {
    if (seen.has(n) && !keep.has(n)) {
      keep.add(n);
      return true;
    }
    seen.add(n);
    return false;
  });

  return arr;
}

// --- tests ---
console.log(findDuplicates([1, 2, 2, 3, 1, 4])); // expected: [2, 1]
console.log(findDuplicates([1, 2, 3])); // expected: []
console.log(findDuplicates(["a", "a"])); // expected: ["a"]

module.exports = { findDuplicates };
