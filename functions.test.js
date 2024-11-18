const capitalize = require('./functions');

test('capitalizes the first letter of a string', () => {
    expect(capitalize("hello")).toBe("Hello")
})