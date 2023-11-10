const cyp = require('../scripts/caesarCipher');

test('properly cypher string', () => {
    expect(cyp("Z.b",1)).toBe("A.c")
})