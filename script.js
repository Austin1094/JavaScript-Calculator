const resultText = document.getElementsByClassName("result-text")[0];

let storedValue = null;
let operator = null;

function onNumberPressed(number) { 
    if (number === ".") {
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) 
        return;
    }

    resultText.innerHTML += number.toString()
}

function canOperate() {
    return resultText.innerHTML.length >= 1;
}

function operate(number) {
    let result;

    switch (operator) {
        case "+":
            result = storedValue + number;
            break;

        case "-":
            result = storedValue - number;
            break;

        case "x":
            result = storedValue * number;
            break;
        
        case "/":
            result = storedValue / number;
            break;
    }

    resultText.innerHTML = result;
    storedValue = null;
    operator = null;
}

function onOperationPressed(operation) {
    const number = parseFloat(resultText.innerHTML); // Grabs whatever is inside result window

    if (!canOperate()) return; // Makes sure the result window isn't empty

    if (operation === "=" && storedValue !== null) { // If = is pressed and there is a stored value
        return canOperate(number);
    } else if (operation === "c") {
        storedValue = null;
        operator = null;
    } else {
        operator = operation;
        storedValue = number;
    }

    resultText.innerHTML = "";
}