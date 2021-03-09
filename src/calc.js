const numbers = document.querySelectorAll('.number-btn'),
  operators = document.querySelectorAll('.operator-btn'),
  clearBtn = document.getElementById('ac'),
  resultBtn = document.getElementById('result'),
  decimalBtn = document.getElementById('decimal'),
  display = document.getElementById('display');
let memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation = '';

/*for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener('click', (e) => numberPress(e.target.textContent));
}*/
numbers.forEach(number => number.addEventListener('click', (e) => numberPress(e.target.textContent)));

/*for (let i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener('click', (e) => operation(e.target.textContent));
}*/
operators.forEach(operator => operator.addEventListener('click', (e) => operation(e.target.textContent)));

clearBtn.addEventListener('click', clear);

decimalBtn.addEventListener('click', decimal);

/*function numberPress(num) {
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
}*/
const numberPress = num => {
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
}

/*function operation(oper) {
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
}*/

const operation = oper => {
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
}

function decimal(arg) {
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

function clear(id) {
  if ((id = 'ac')) {
    display.value = '0';
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = '';
  }
}
