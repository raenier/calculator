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

const number_buttons = document.querySelectorAll('.btn.number');
const display = document.querySelector('.display');
let current_display_string = '';

number_buttons.forEach(btn => btn.addEventListener('click', (e) => {
  //get value of button
  input = e.target.innerHTML;
  //get current displayed string on div
  current_display_string = (display.innerHTML == 0) ? '' : display.innerHTML;
  //concat button value to main string
  current_display_string += input;
  //update div display
  display.textContent = current_display_string;
} ));