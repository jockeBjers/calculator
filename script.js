let firstNum = '';
let secondNum = '';
let operator = '';

const display = document.getElementById("display");

function setValue(value) {
    display.value += value;
    if (!operator) {
        firstNum += value;
    } else {
        secondNum += value;
    }
}

function setOperator(operation) {
    if (firstNum === '') { return }
    operator = operation;
    display.value += `${operation}`
}

function calculateResult() {
    const result = operate(operator, firstNum, secondNum);
    display.value = result;

    firstNum = result.toString();
    secondNum = '';
    operator = '';
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
    display.value = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}

function clearLatest() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}