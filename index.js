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
  if(num2 === 0) {return 'YOU P***E OF SH*T'};

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
const equals = document.querySelector('.btn.equals');

//Used for calculation
let firstnumber = 0;
let secondnumber = 0;
let operator = '';

let current_display_string = '';
let for_clearance = false;

number_buttons.forEach(btn => btn.addEventListener('click', (e) => {
  //get value of button
  input = e.target.innerHTML;
  //get current displayed string on div
  if(display.innerHTML == '0' || for_clearance) {
    console.log(for_clearance);
    for_clearance=false;
    current_display_string = ''
  } else {
    current_display_string = display.innerHTML;
  }
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
  if(!firstnumber) {
    firstnumber = parseFloat(display.innerHTML);
    operator = e.target.getAttribute('value');
    for_clearance = true;
  } else {
    secondnumber = parseFloat(display.innerHTML);
    res = operate(firstnumber, secondnumber, operator);
    display.innerHTML = res;
    //store operator and result/ reset second number
    operator = e.target.getAttribute('value');
    firstnumber = res;
    secondnumber = 0;
    for_clearance = true;
  }
} ));

equals.addEventListener('click', (e) => {
  //store second number first
  if(firstnumber) {
    secondnumber = parseFloat(display.innerHTML);
    res = operate(firstnumber, secondnumber, operator);
    //Start new session
    display.innerHTML = res;
    firstnumber = 0;
    operator = '';
    secondnumber = 0;
  }
});