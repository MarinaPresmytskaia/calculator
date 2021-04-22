const display = document.getElementById('display'),
  calcBtn = document.getElementById('calc_buttons');
let memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation,
  numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  operatorsArr = [
    'subtraction',
    'addition',
    'multiplication',
    'division',
    'result',
  ];

const numberPress = (num) => {
  if (memoryNewNumber) {
    display.value = num;
    memoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = num;
    } else {
      display.value += num;
    }
  }
};

const operation = (oper) => {
  memoryNewNumber && memoryPendingOperation !== 'result'
    ? (display.value = memoryCurrentNumber)
    : operationCalc(oper);
};

const operationCalc = (oper) => {
  memoryNewNumber = true;
  let localOperationMemory = parseFloat(display.value);
  if (memoryPendingOperation === 'addition') {
    memoryCurrentNumber += localOperationMemory;
  } else if (memoryPendingOperation === 'subtraction') {
    memoryCurrentNumber -= localOperationMemory;
  } else if (memoryPendingOperation === 'multiplication') {
    memoryCurrentNumber *= localOperationMemory;
  } else if (memoryPendingOperation === 'division') {
    memoryCurrentNumber /= localOperationMemory;
  } else {
    memoryCurrentNumber = localOperationMemory;
  }
  display.value = memoryCurrentNumber;
  memoryPendingOperation = oper;
};

const decimal = () => {
  let localDecimalMemory = display.value;

  if (memoryNewNumber) {
    localDecimalMemory = '.0';
    memoryNewNumber = false;
  } else if (localDecimalMemory.indexOf('.') === -1) {
    localDecimalMemory += '.';
  }

  display.value = localDecimalMemory;
};

const clear = () => {
  display.value = '0';
  memoryNewNumber = true;
  memoryCurrentNumber = 0;
  memoryPendingOperation = '';
};

const btnPress = (e) => {
  let nameBtn = e.target.id;
  if (numbersArr.includes(parseFloat(nameBtn))) {
    numberPress(nameBtn);
  } else if (operatorsArr.includes(nameBtn)) {
    operation(nameBtn);
  } else if (nameBtn === 'ac') {
    clear();
  } else {
    decimal();
  }
};

calcBtn.addEventListener('click', btnPress);
