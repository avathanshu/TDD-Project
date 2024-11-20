const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');


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

test("Caesar Cipher", () => {
    expect(caesarCipher("abc", 1)).toEqual("bcd");
    expect(caesarCipher("xyz", 3)).toEqual("abc");
    expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
    expect(caesarCipher('Hello, World!', 3)).toEqual("Khoor, Zruog!");
})

test("Array analysis", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average()).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min()).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max()).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length()).toBe(6);
})
