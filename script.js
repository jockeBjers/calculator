let firstNum = '';
let secondNum = '';
let operator = '';

const display = document.getElementById("display");

function updateDisplay(value) {
    display.value = value;
}

function setValue(value) {
    if (!operator) {
        firstNum += value;
        updateDisplay(firstNum);
    } else {
        secondNum += value;
        updateDisplay(`${firstNum}${operator}${secondNum}`)
    }
}

function setOperator(operation) {
    if (firstNum === '') { return }
    if (secondNum) {
        firstNum = operate(operation, firstNum, secondNum).toString();
        secondNum = '';
    }
    operator = operation;
    updateDisplay(`${firstNum} ${operator}`);
}

function calculateResult() {
    if (!operator || !secondNum) return;
    const result = operate(operator, firstNum, secondNum);
    updateDisplay(result);

    firstNum = result.toString();
    secondNum = '';
    operator = '';
}

function calculatePercentage() {
    if (secondNum) {
        secondNum = (parseFloat(secondNum) / 100).toString();
        display.value = `${firstNum} ${operator} ${secondNum}`;
    } else if (firstNum) {
        firstNum = (parseFloat(firstNum) / 100).toString();
        display.value = firstNum;
    }
}

function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function multiply(a, b) {

    return a * b;
}

function divide(a, b) {

    return a / b;
}

function percentage(a) {
    return a / 100;
}

function operate(operator, a, b) {

    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {

        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return percentage(a);

    }
}

function clearAllDisplay() {
     firstNum = '';
    secondNum = '';
    operator = '';
    updateDisplay('');
}

function clearLatest() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}