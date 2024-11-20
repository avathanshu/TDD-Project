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


function caesarCipher(str, shift) {
    const plaintext = str;
    const shiftFactor = shift

    let cipherText = "";
    for(let i = 0; i < plaintext.length; i++) {
        let ascii = plaintext[i].charCodeAt(0);
        ascii += shiftFactor;

        if (!(65 <= plaintext[i].charCodeAt(0) && plaintext[i].charCodeAt(0) <= 90) && !(97 <= plaintext[i].charCodeAt(0) && plaintext[i].charCodeAt(0) <= 122)) {
            cipherText += String.fromCharCode(plaintext[i].charCodeAt(0))
        }
        
        else if ((plaintext[i].charCodeAt(0) <= 90) && ascii > 90) {
            let start = 65 + (shiftFactor - (91 - plaintext[i].charCodeAt(0)))
            cipherText += String.fromCharCode(start)

        }

        else if ((97 <= plaintext[i].charCodeAt(0) <= 122) && ascii > 122) {
            let start = 97 + (shiftFactor - (123 - plaintext[i].charCodeAt(0)))
            cipherText += String.fromCharCode(start)
        }

        else {
            cipherText += String.fromCharCode(ascii);
        }
    }

    return cipherText

}

function analyzeArray(arr) {
    let array = arr;
    
    function average() {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avg = sum / array.length;

        return avg
    }

    function min() {
        let min = Math.min(...array)

        return min
    }

    function max() {
        let max = Math.max(...array);

        return max
    }

    function length() {
        let len = array.length;

        return len
    }

    return { average, min, max, length }

}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };