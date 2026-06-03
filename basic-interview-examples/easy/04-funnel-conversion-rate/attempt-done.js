
function funnelConversionRates(funnel, journeys) {

  const funnelFromToMap = new Map();

  // console.log("prepare");
  // prepare validate funnel steps
  for (let i = 0; i < funnel.length - 1; i++) {
    const stepFrom = funnel[i];
    if (funnelFromToMap.has(stepFrom)) {
      return [];  // invalid - journey steps should not appear twice
    }
    funnelFromToMap.set(stepFrom, funnel[i + 1]);
  }

  // console.log("aggregate");
  // aggregate
  const stepCountMap = new Map();
  for (const journey of journeys) {
    for (let i = 0; i < journey.length; i++) {
      const step = journey[i];
      // validate journey step
      // if (i > 0 && !isValidStep(journey[i - 1], step, funnelFromToMap)) {
      if (i > 0 && !funnel.includes(step)) {
        continue; // log error
      }
      if (!stepCountMap.has(step)) {
        stepCountMap.set(step, 0);
      }
      stepCountMap.set(step, stepCountMap.get(step) + 1);
    }
  }

  // console.log("calculate");
  // calculate conversion = to count/from count
  let result = [];
  for (let i = 0; i < funnel.length - 1; i++) {
    const stepFrom = funnel[i];
    const stepTo = funnel[i + 1];

    let rate = 0;
    if (stepCountMap.has(stepFrom) && stepCountMap.has(stepTo)) {
      rate = stepCountMap.get(stepTo) / stepCountMap.get(stepFrom);
    }

    console.log(stepFrom + " " + stepTo + " " + rate);
    result.push({ from: stepFrom, to: stepTo, rate: round(rate) });
  }

  return result;
}

function isValidStep(stepFrom, stepTo, funnelFromToMap) {
  return funnelFromToMap.has(stepFrom) && funnelFromToMap.get(stepFrom) === stepTo;
}

function round(x) {
  return Math.round(x * 10000) / 10000;
}

const funnel = ["landing", "signup", "purchase"];
const journeys = [
  ["landing", "signup"],
  ["landing", "signup", "purchase"],
  ["landing"],
];
console.log("example =>", funnelConversionRates(funnel, journeys));
// expected: [
//   { from: "landing", to: "signup", rate: 0.6667 },
//   { from: "signup", to: "purchase", rate: 0.5 },
// ]

console.log("empty journeys =>", funnelConversionRates(funnel, []));
// expected: [{ from: "landing", to: "signup", rate: 0 }, { from: "signup", to: "purchase", rate: 0 }]

console.log("invalid skip =>", funnelConversionRates(funnel, [["landing", "purchase"]]));
// user reached landing only (purchase without signup doesn't count)

module.exports = { funnelConversionRates };
