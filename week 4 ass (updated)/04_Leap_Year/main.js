// chain logic
function isLeapYear_LogicChain(year) {
    // use and operators && or operators || 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "It is a leap year";
      }
      return "It is not a leap year";
}

// nested function
function isLeapYear_NestedIfConditional(year) {
    // use nested contional Ifs
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return "It is a leap year";
        } else {
            if (year % 400 === 0) {
                return "It is a leap year";
            } else {
                return "It is not a leap year";
            }
        }
    } else {
        return "It is not a leap year";
    }
}

// Test Case
console.log(isLeapYear_LogicChain(2100));
// expected: not a leap year
console.log(isLeapYear_NestedIfConditional(2100));
// expected: not a leap year

console.log(isLeapYear_LogicChain(2000));
// expected: a leap year
console.log(isLeapYear_NestedIfConditional(2000));
// expected: a leap year

console.log(isLeapYear_LogicChain(2024));
// expected: a leap year
console.log(isLeapYear_NestedIfConditional(2024));
// expected: a leap year