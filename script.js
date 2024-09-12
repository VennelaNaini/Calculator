let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.innerText = '0';
}

function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function appendNumber(number) {
  currentInput += number;
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    case '%':
        result = prev % curr;
        break;
   
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  display.innerText = currentInput;
}
