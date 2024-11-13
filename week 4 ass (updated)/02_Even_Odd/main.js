class NumberChecker {
  // Polymorphic function to check if numbers are odd or even
  checkOddEven(input) {
      /**
       * Checks if the input is odd or even.
       * If the input is a single number, returns "Odd" or "Even".
       * If the input is an array, returns an array of "Odd" or "Even" for each number.
       * If the input is not a number or an array of numbers, returns "Invalid input".
       */
      if (typeof input === "number") {
          return input % 2 === 0 ? "Even" : "Odd";
      } else if (Array.isArray(input)) {
          return input.map((num) => {
              if (typeof num === "number") {
                  return num % 2 === 0 ? "Even" : "Odd";
              } else {
                  return "Invalid input";
              }
          });
      } else {
          return "Invalid input";
      }
  }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven('Hello'));
// Expected Output: Invalid input
