/**
 * Implement mergeSortedInPlace — LC #88 (see problem.md)
 * Run: node attempt.js
 */
function mergeSortedInPlace(A, m, B, n) {
  // TODO: modify A in place
}

function run(label, A, m, B, n, expected) {
  mergeSortedInPlace(A, m, B, n);
  console.log(label + " =>", A, JSON.stringify(A) === JSON.stringify(expected) ? "OK" : "expected " + JSON.stringify(expected));
}

run("example", [1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3, [1, 2, 3, 4, 5, 6]);
run("B only", [0, 0, 0], 0, [1, 2, 3], 3, [1, 2, 3]);
run("A only", [1, 2, 3, 0, 0], 3, [], 0, [1, 2, 3]);
run("interleave", [1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3, [1, 2, 3, 4, 5, 6]);

module.exports = { mergeSortedInPlace };
