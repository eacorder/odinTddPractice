const Calculator = require('../scripts/calculator');


describe("Calculator basic operations", () => {
    let calculator;

    beforeEach(function () {
      calculator = new Calculator();
    });

    test('properly sum 2 values', () => {
    
        expect(calculator.add(1,2)).toBe(3)
    })

    test('properly substract 2 values', () => {
    
        expect(calculator.substract(3,2)).toBe(1)
    })

    test('properly multiply 2 values', () => {
    
        expect(calculator.multiply(1,2)).toBe(2)
    })

    test('properly divide 2 values', () => {
    
        expect(calculator.divide(4,2)).toBe(2)
    })
})
