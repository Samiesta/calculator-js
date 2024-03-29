
let firstNumber,
    secondNumber,
    operator,
    userInput;

const displayButton = document.querySelectorAll(".numeric-button-body button, .operator-button-body button");

displayButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        let outputDisplay = document.querySelector(".input")
        outputDisplay.textContent += event.target.textContent;
        userInput = outputDisplay.textContent
        console.log(userInput)

    })
})

const operatorButton = document.querySelectorAll(".operator-button-body button")
operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = +userInput.slice(0, userInput.length -1)
        console.log(firstNumber)
    })
})

let accumlator = 0


function add(firstNumber, secondNumber) {
    accumlator = firstNumber + secondNumber
    return accumlator
}

function subtract(firstNumber, secondNumber) {
    accumlator = firstNumber - secondNumber
    return accumlator

}

function multiply(firstNumber, secondNumber) {
    accumlator = firstNumber * secondNumber
    return accumlator

}

function divide(firstNumber, secondNumber) {
    accumlator = firstNumber / secondNumber
    return accumlator
}


function displayInput() {

}


function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return add(firstNumber, secondNumber)
    }
    if (operator == "-") {
        return subtract(firstNumber, secondNumber)
    }
    if (operator == "*") {
        return multiply(firstNumber, secondNumber)
    }
    if (operator == "/") {
        return divide(firstNumber, secondNumber)
    }
}

const result = operate(5,6,"+")
console.log(result)

// console.log(operate(5,6,"+"))