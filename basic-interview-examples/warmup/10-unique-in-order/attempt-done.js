
function uniqueInOrder(arr) {

  const set = new Set();

  return arr.filter((n)=>{
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    return true;
  });

  // const result = [];
  // for (const n of arr) {
  //   if (set.has(n)) {
  //     continue;
  //   }
  //   result.push(n);
  //   set.add(n);
  // }
  // return result;
}

// --- tests ---
console.log(uniqueInOrder(["a", "b", "a", "c", "b"])); // expected: ["a","b","c"]
console.log(uniqueInOrder([1, 1, 2, 1])); // expected: [1, 2]
console.log(uniqueInOrder([])); // expected: []

module.exports = { uniqueInOrder };
