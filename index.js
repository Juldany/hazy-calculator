function exclude(value) {
  if (value === "") {
    return false;
  }

  return (
    (!isNaN(value) ||
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/") &&
    value !== undefined
  );
}

function calculate(calculateSteps) {
  calculateSteps = calculateSteps.filter(exclude);
  if (calculateSteps.length < 3) {
    return NaN;
  }

  switch (calculateSteps[1]) {
    case "*":
      return calculateSteps[0] * calculateSteps[2];

    case "+":
      return calculateSteps[0] + calculateSteps[2];

    case "-":
      return calculateSteps[0] - calculateSteps[2];

    case "/":
      return calculateSteps[0] / calculateSteps[2];

    default:
      return NaN;
  }
}

module.exports = calculate;
