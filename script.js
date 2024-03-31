
let firstNumber = "",
    secondNumber = "",
    operator = "",
    userInput = "";

const numberButton = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");
const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");




numberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputDisplay.textContent += event.target.textContent;
        userInput = inputDisplay.textContent
        console.log(userInput)

    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputStorage(inputDisplay.textContent, event.target.textContent)
        inputOutputToggle(event);
        if (typeof firstNumber == "number" && typeof secondNumber == "number") {
            let result  = operate(firstNumber, secondNumber, operator)
            outputDisplay.textContent = result
            firstNumber = result
            secondNumber = ""
        } else if (button.textContent == "=" && typeof firstNumber == "number") {
            outputDisplay.textContent = firstNumber
        }

    })

    })

// operatorButton.forEach((button) => {
//     if (button.textContent != "=") {
//         button.addEventListener("click", (event) => {
//             outputDisplay.textContent = "";
//             inputStorage(inputDisplay.textContent, event.target.textContent)
//             outputDisplay.textContent += inputDisplay.textContent + event.target.textContent;
//             inputDisplay.textContent = "";
//         })
//     } else if (button.textContent == "=") {
//         button.addEventListener("click", () => {

//         })
//     }
// })

function inputOutputToggle(event) {
    outputDisplay.textContent = "";
    outputDisplay.textContent += inputDisplay.textContent + event.target.textContent;
    inputDisplay.textContent = "";
}

function inputStorage(num, ope) {
    if (firstNumber == "") {
        firstNumber = Number(num);
        console.log("First number: " + firstNumber);
    } else if (typeof firstNumber === "number") {
        secondNumber = Number(num)
        console.log("Second Number: " + secondNumber)
        console.log("Operator:" + ope)
    }

    if (ope != "=" ) {
        operator = ope;
    }
}

// const operatorButton = document.querySelectorAll(".operator-button-body button")
// operatorButton.forEach((button) => {
//     button.addEventListener("click", () => {
//         firstNumber = +userInput.slice(0, userInput.length -1)
//         console.log(firstNumber)
//     })
// })

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
