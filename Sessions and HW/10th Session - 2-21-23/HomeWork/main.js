const { Bank1, Bank2 } = require('./bankClassAndCreditInterface');

const bank1 = new Bank1('John Smith', 500);
const bank2 = new Bank2('Jane Doe', 1000);

console.log(bank1.hasCredit()); // true
console.log(bank2.hasCredit()); // false

bank1.deposit(100);
bank1.withdraw(50);

bank2.deposit(200);
bank2.withdraw(100);

console.log(bank1.balance); // 550
console.log(bank1.transactions);

console.log(bank2.balance); // 1100
console.log(bank2.transactions);
