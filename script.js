
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
        if (firstNumber != "" && secondNumber != "") {
            outputDisplay.textContent = ""
            inputDisplay.textContent = ""
            let result  = operate(Number(firstNumber), Number(secondNumber), operator)
            outputDisplay.textContent = result
            console.log(result)
            firstNumber = result
            secondNumber = ""
        } else if (button.textContent == "=" && typeof firstNumber == "number") {
            outputDisplay.textContent = firstNumber
        }
        if (firstNumber != accumlator) {
            inputOutputToggle(event);
        }

        if (event.target.textContent != "=" ) {
            operator = event.target.textContent;
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
        // firstNumber = Number(num);
        firstNumber = num;
        console.log("First number: " + Number(firstNumber));
    } else if (firstNumber != "") {
        // secondNumber = Number(num)
        secondNumber = num
        console.log("Second Number: " + Number(secondNumber))
        console.log("Operator:" + ope)
    } else {
        secondNumber = ""
    }

    // if (ope != "=" ) {
    //     operator = ope;
    // }
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
    if (operator == "x") {
        return multiply(firstNumber, secondNumber)
    }
    if (operator == "/") {
        return divide(firstNumber, secondNumber)
    }
}

const result = operate(5,6,"+")
console.log(result)

// console.log(operate(5,6,"+"))
