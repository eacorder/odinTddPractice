const cap = require('../scripts/capitalize');

test('properly uppercase first letter of string', () => {
    expect(cap("juan")).toBe("Juan")
})