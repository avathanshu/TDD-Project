function capitalize(str) {
    let input = str;
    const newString = input[0].toUpperCase() + input.slice(1)
    return newString;
}

function reverseString(str) {
    let input = str;
    let newString = "";
    for (let i = 0; i < input.length; i++) {
        newString += input[input.length - i - 1];
    }
    return newString;
}

function calculator() {
    function add(a,b) {
        return a + b;
    }

    function subtract(a,b) {
        return a - b;
    }

    function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        return (a / b);
    }

    return { add, subtract, multiply, divide }
}





module.exports = { capitalize, reverseString, calculator };