const rev = require('../scripts/reverseString');

test('properly return reverse string of string', () => {
    expect(rev("juan")).toBe("nauj")
})