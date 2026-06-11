/**
 * Implement KthLargestTracker — LC #703 (see problem.md)
 * Run: node attempt.js
 */
class KthLargestTracker {
  constructor(k, initialSamples) {
    // TODO
  }

  add(sample) {
    // TODO
  }
}

const t = new KthLargestTracker(3, [4, 5, 8, 2]);
console.log("add 3 =>", t.add(3));   // expected: 4
console.log("add 5 =>", t.add(5));   // expected: 5
console.log("add 10 =>", t.add(10)); // expected: 5
console.log("add 9 =>", t.add(9));   // expected: 8
console.log("add 4 =>", t.add(4));   // expected: 8

module.exports = { KthLargestTracker };
