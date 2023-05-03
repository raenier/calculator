function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if(num2 === 0) {return undefined};

  return num1 / num2;
}

function operate(num1, num2, operator) {
  if(!['add', 'subtract', 'multiply', 'divide'].includes(operator)) { return undefined };

  return window[operator](num1, num2);
}