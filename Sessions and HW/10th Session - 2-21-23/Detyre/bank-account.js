class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
      this.transactions = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push({
        type: 'deposit',
        amount: amount,
        date: new Date()
      });
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.transactions.push({
          type: 'withdrawal',
          amount: amount,
          date: new Date()
        });
      } else {
        console.log('Insufficient funds');
      }
    }
  }
  
  module.exports = BankAccount;
  