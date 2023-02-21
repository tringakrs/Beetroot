const BankAccount = require('./bank-account');
const myAccount = new BankAccount('John Smith', 500);
myAccount.deposit(100);
myAccount.withdraw(50);
console.log(myAccount.balance);
console.log(myAccount.transactions);