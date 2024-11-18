function capitalize(str) {
    let input = str;
    const newString = input[0].toUpperCase() + input.slice(1)
    return newString;
}


capitalize("hello")
module.exports = capitalize;