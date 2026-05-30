/**
 * Classic: new array + indexOf to check "already added?"
 */
function uniqueInOrder(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (result.indexOf(value) === -1) {
      result.push(value);
    }
  }

  return result;
}

module.exports = { uniqueInOrder };
