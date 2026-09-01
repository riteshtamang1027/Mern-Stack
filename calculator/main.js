// get the display section
const previousDisplay = document.querySelector(".previous");
const currentDisplay = document.querySelector(".current");

// abstract all the buttons
const buttons = document.querySelectorAll(".buttons button");

// create the variables to remember the state

let currentInput = "0";
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;

// handles numbers buttons

function inputNumber(number) {
  if (currentInput === 0 || shouldResetDisplay) {
    currentInput = number;
    shouldResetDisplay = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

// handlig update number
function updateDisplay() {
  currentDisplay.textContent = currentInput;

  if (previousDisplay !== null && operator !== null) {
    previousDisplay.textContent = `${previousDisplay} ${operator}`;
  } else {
    previousDisplay.textContent = "";
  }
}

// handles operators

function chooseOperator(selectOperator) {
  previousInput = number(currentInput);
  operator = selectOperator;
  shouldResetDisplay = true;

  updateDisplay();
}
