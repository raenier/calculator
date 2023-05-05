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

//button nodes
const number_buttons = document.querySelectorAll('.btn.number');
const display = document.querySelector('.display');
const clear = document.querySelector('.btn.clr');
const backspace = document.querySelector('.btn.bck');
const dot = document.querySelector('.btn.dot');
const operators = document.querySelectorAll('.btn.operator');

//Used for calculation
let firstnumber = 0;
let secondnumber = 0;
let operator = '';

let current_display_string = '';

number_buttons.forEach(btn => btn.addEventListener('click', (e) => {
  //get value of button
  input = e.target.innerHTML;
  //get current displayed string on div
  current_display_string = (display.innerHTML == '0') ? '' : display.innerHTML;
  //limit input to 20 strings
  if(current_display_string.length == 20) { return };
  //concat button value to main string
  current_display_string += input;
  //update div display
  display.textContent = current_display_string;
} ));

clear.addEventListener('click', (e) => {
  // start fresh
  display.innerHTML = 0;
  firstnumber = 0;
  secondnumber = 0;
  operator = '';
});
backspace.addEventListener('click', (e) => {
  text = display.innerHTML;
  if(text.length <= 1) {
     display.innerHTML = 0;
   } else {
     display.innerHTML = text.slice(0, -1);
   }
});

dot.addEventListener('click', (_) => {
  if(display.innerHTML.indexOf('.') == -1) { display.innerHTML += '.' };
});

// Computation
operators.forEach(op => op.addEventListener('click', (e) => {
  //store current string
  if(!firstnumber) {
    firstnumber = parseFloat(display.innerHTML);
    operator = e.target.getAttribute('value');
  } else {
    secondnumber = parseFloat(display.innerHTML);
    //compute
    res = operate(firstnumber, secondnumber, operator);
    display.innerHTML = res;
    //store operator and result/ reset second number
    operator = e.target.getAttribute('value');
    firstnumber = res;
    secondnumber = 0;
  }

} ));
