/*kto klase implementojn interface kredi qe ka metoden hasCredit the return boolean type Bank1 
leshon kredi kurse Bank2 nuk leshon kredi ne main.js te testohen te gjitha metodat */

class CreditProvider {
    hasCredit() {}
  }
  
  class Bank1 extends CreditProvider {
    constructor(owner, balance) {
      super();
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
  
    hasCredit() {
      return true;
    }
  }
  
  class Bank2 extends CreditProvider {
    constructor(owner, balance) {
      super();
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
  
    hasCredit() {
      return false;
    }
  }
  
  module.exports = {
    Bank1,
    Bank2
  };