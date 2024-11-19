const { capitalize, reverseString, calculator } = require('./functions');


test('capitalizes the first letter of a string', () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("Reverses the string", () => {
    expect(reverseString("Hello")).toEqual("olleH");
})

test("Calcuator", () => {
    expect(calculator().add(1,2)).toBe(3);
    expect(calculator().subtract(1,2)).toBe(-1);
    expect(calculator().multiply(1,2)).toBe(2);
    expect(calculator().divide(1,2)).toBe(0.5);
})
