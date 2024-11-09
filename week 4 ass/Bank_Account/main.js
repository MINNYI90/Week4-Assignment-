// Mock Data 
balance = 5000;
const transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {

        // Function to return the current balance

    return balance;

    
}

function deposit(amount) {

        // Function to deposit money into the account

    balance += amount
    console.log('Deposited ${amount}');
    transactionHistory.push('Deposited ${amount} into Savings Account');

}

function withdraw(amount) {

            // Function to withdraw money from the account

    if (balance<amount){
    return ("You don't have enough money in an account to withdraw");
    }else{
            balance -= amount
            console.log('Withdrawed ${amount}');
            transactionHistory.push('Withdrawed ${amount} from Savings Account');
        }

}

function getTransactionHistory() {
   //Using Array.prototype.join() with Preformatted Array Elements

    const formattedTransactions = transactionHistory.map((transaction, index) => {
        return `${index + 1}) ${transaction}`;
    });
    return 'Transaction History\n' + formattedTransactions.join('\n');
    
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/