
function centsToDollars(cents) {
  // const dollar = (cents/100).toFixed(2);
  const dollar = cents/100;
  let result = dollar + "";
  if (dollar >= 0) {
    result = "$" + result;
  } else {
    result = "-$" + result.slice(1);
  }

  if (result.indexOf(".") === -1) {
    return result + ".00";
  } else if (result.indexOf(".") === result.length-2) {
    return result + "0";
  }
  return result;
}

// --- tests ---
console.log(centsToDollars(1005)); // expected: "$10.05"
console.log(centsToDollars(1999)); // expected: "$19.99"
console.log(centsToDollars(-50)); // expected: "-$0.50"
console.log(centsToDollars(50)); // expected: "$0.50"
console.log(centsToDollars(0)); // expected: "$0.00"
console.log(centsToDollars(5)); // expected: "$0.05"

module.exports = { centsToDollars };
