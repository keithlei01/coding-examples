
function filterThreshold(rows, min) {
  return rows.filter((row) => {
    return row.value >= min;
  });

  // const result = [];
  // for (const row of rows) {
  //   if (row.value >= min) {
  //     result.push(row);
  //   }
  // }
  // return result;
}


// --- tests ---
const result = filterThreshold(
  [
    { id: 1, value: 8 },
    { id: 2, value: 3 },
    { id: 3, value: 5 },
  ],
  5
);
console.log(result);
// expected: [{ id: 1, value: 8 }, { id: 3, value: 5 }]

module.exports = { filterThreshold };
