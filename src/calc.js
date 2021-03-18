const display = document.getElementById('display'),
  calcBtn = document.getElementById('calc_buttons');
let memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation = '',
  numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  operatorsArr = ['-', '+', '*', '/', '='];

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
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== '=') {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === '+') {
      memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '-') {
      memoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '*') {
      memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '/') {
      memoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    }
  }
  display.value = memoryCurrentNumber;
  memoryPendingOperation = oper;
};

const decimal = arg => {
  let localDecimalMemory = display.value;

  if (memoryNewNumber) {
    localDecimalMemory = '.0';
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

const clear = id => {
  if ((id = 'ac')) {
    display.value = '0';
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = '';
  }
}

const btnPress = (e) => {

  let nameBtn = e.target.textContent;
  if (numbersArr.includes(parseFloat(nameBtn))) {
    numberPress(nameBtn);
  } else  if (operatorsArr.includes(nameBtn)) {
      operation(nameBtn);
    } else if (nameBtn === 'ac') {
      clear(nameBtn);
    } else {
      decimal(nameBtn);
    }
  
};

calcBtn.addEventListener('click', btnPress);

