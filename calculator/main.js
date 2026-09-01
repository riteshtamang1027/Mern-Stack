// get the display section
const previousDisplay = document.querySelector(".previous");
const currentDisplay = document.querySelector(".current");

// abstract all the buttons
const buttons = document.querySelectorAll(".buttons button");

// create the variables to remember the state

let currentInput = 0;
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;

// handles numbers

function inputNumber(number) {
  if (currentInput === 0 || shouldResetDisplay) {
    currentInput = number;
    shouldResetDisplay = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

// handle decimal number

function inputDecimal() {
  if (shouldResetDisplay) {
    currentDisplay = ".";
    shouldResetDisplay = false;
  } else if (!currentInput === ".") {
    currentInput += ".";
  }
  updateDisplay();
}

// handlig update number
function updateDisplay() {
  currentDisplay.textContent = currentInput;

  if (previousDisplay !== null && operator !== null) {
    previousDisplay.textContent = `${previousInput} ${operator}`;
  } else {
    previousDisplay.textContent = "";
  }
}

// handles operators
function chooseOperator(selectOperator) {
  previousInput = Number(currentInput);
  operator = selectOperator;
  shouldResetDisplay = true;

  updateDisplay();
}

// actual calculation section
function calculate() {
  if (previousInput === null || operator === null) {
    return;
  }

  const firstNumber = previousInput;
  const secondNumber = Number(currentInput);

  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        currentInput = "Error";
        previousInput = null;
        operator = null;
        updateDisplay();
        return;
      }
      result = firstNumber / secondNumber;
      break;
  }

  currentInput = String(result);
  previousInput = null;
  operator = null;

  shouldResetDisplay = true;
  updateDisplay();
}

// percentage calculation
function percentage() {
  if (currentInput === "Error") {
    return;
  }
  currentInput = String(Number(currentInput) / 100);
  updateDisplay();
}

// handling clear the previous display

function clearCalculator() {
  currentInput = 0;
  previousInput = null;
  operator = null;

  shouldResetDisplay = false;

  updateDisplay();
}

function removeNumber() {

  currentInput = currentInput.slice(0, -1);

  updateDisplay();
}
// track all the buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      inputNumber(value);
    } else if (value === ".") {
      inputDecimal();
    } else if (value === "%") {
      percentage();
    } else if (button.classList.contains("operator")) {
      chooseOperator(value);
    } else if (button.classList.contains("equal")) {
      calculate();
    } else if (value === "AC") {
      clearCalculator();
    } else if (value === "x") {
      removeNumber();
    }
  });
});

updateDisplay();
