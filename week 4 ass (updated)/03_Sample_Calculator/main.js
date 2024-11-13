class SimpleCalculator {
    constructor() { }

    // Polymorphic function to perform arithmetic calculations
    calculate(operation, num1, num2) {
        // Check if num1 and num2 are numbers
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Invalid input: num1 and num2 must be numbers';
        }

        // Perform operation based on input
        if (operation === 'add') {
            return num1 + num2;
        } else if (operation === 'subtract') {
            return num1 - num2;
        } else if (operation === 'multiply') {
            return num1 * num2;
        } else if (operation === 'divide') {
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return Math.floor(num1 / num2); // Integer division
        } else if (operation === 'modulus') {
            return num1 % num2;
        } else {
            return 'Unknown operation';
        }
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const calculator = new SimpleCalculator();

console.log(calculator.calculate('add', 5, 3));       
// Expected Output: 8
console.log(calculator.calculate('subtract', 10, 4)); 
// Expected Output: 6
console.log(calculator.calculate('multiply', 6, 7));  
// Expected Output: 42
console.log(calculator.calculate('divide', 8, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 9, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 8, 0));    
// Expected Output: Cannot divide by zero
console.log(calculator.calculate('modulus', 8, 3));       
// Expected Output: 2
console.log(calculator.calculate('add', 5, 'three')); 
// Expected Output: Invalid input: num1 and num2 must be numbers
