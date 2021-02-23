const numbers = document.querySelectorAll('.number-btn'),
  operators = document.querySelectorAll('.operator-btn'),
  clearBtn = document.getElementById('ac'),
  resultBtn = document.getElementById('result'),
  decimalBtn = document.getElementById('decimal'),
  display = document.getElementById('display'),
  memoryCurrentNumber = '0',
  memoryNewNumber = false,
  memoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener('click', (e) => numberPress(e.target.textContent));
}

for (let i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener('click',  (e) => operation(e.target.textContent));
}

clearBtn.addEventListener('click', clear);

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);

function numberPress(num) {
  console.log(`Клик по номеру ${num}`);
}

function operation(sumbol) {
  console.log(`Клик по оператору ${sumbol}`);
}

function decimal() {
  console.log('Клик по разделительной точке');
}

function clear() {
  console.log('Клик по ac');
}
function result() {
  console.log('Клик по результату');
}
