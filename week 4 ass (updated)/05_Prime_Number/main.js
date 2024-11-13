function isPrime(num) {
    // If the number is less than or equal to 1, it is not prime
    if (num <= 1) return false;

    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Not prime if divisible by any number
    }

    return true; // Return true if num is prime
}

// Function to find all primes in a given range
function findPrimesInRange(start, end) {
    // Validate the input
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        messageFormatter("Invalid input. Please provide valid start and end numbers.");
        return;
    }

    const primes = [];
    // Loop through the range to find prime numbers
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Format the result message
    messageFormatter(`Primes between ${start} and ${end}: [${primes.join(", ")}]`);
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
    if (typeof input === 'string') {
        console.log(input); // Print string messages directly
    } else if (typeof input === 'boolean') {
        console.log(input ? "The number is prime." : "The number is NOT prime.");
    }
}

// Function to check if a number is prime and display result using messageFormatter
function checkPrimeNum(num) {
    if (isPrime(num)) {
        messageFormatter(`${num} is a prime number.`);
    } else {
        messageFormatter(`${num} is NOT a prime number.`);
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log("Test case 1:");
checkPrimeNum(2);
// Expected Output: 2 is a prime number.

console.log("Test case 2:");
checkPrimeNum(1);
// Expected Output: 1 is NOT a prime number.

console.log("Test case 3:");
checkPrimeNum(13);
// Expected Output: 13 is a prime number.

console.log("Test case 4:");
checkPrimeNum(25);
// Expected Output: 25 is NOT a prime number.

console.log("Test case 5:");
findPrimesInRange(10, 20);
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log("Test case 6:");
findPrimesInRange(30, 50);
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log("Test case 7:");
findPrimesInRange('test');
// Expected Output: Invalid input. Please provide valid start and end numbers.
