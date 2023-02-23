OS Module in NodeJs

Metodat testim

Ushtrimi 1: express app (without express-generator)
Krijoni një file  “person.js”
Në “person.js”, krijo një klasë të quajtur “Person” me attibutet e mëposhtme: “emri” , “mosha”, “gjinia” dhe “email”.
Shtoni një konstruktor në klasën “Person” që merr vlera për secilën nga atributet
Shtoni një metodë në klasën “Person” të quajtur “introduce” që kthen një varg që prezanton: personin me emrin, moshën dhe gjininë e tij.
Beje enkapsulimin e atributeve
Eksporto klasën “Person” nga “person.js”. krijo inctancen , testo metodat.

Krijoni një file të ri të quajtur “bank-account.js” në folderin tuaj të projektit. Në “bank-account.js”, përcaktoni një klasë të quajtur “BankAccount” 
me vetitë e mëposhtme: “pronari”, “balanca” ,“transaksionet” (array). Shtoni një konstruktor në klasën “BankAccount” që merr vlerat për “owner” dhe “bilance” 
dhe i vendos ato Shtoni një metodë në klasën “Bank Account” të quajtur “deposit” që merr një vlerë dhe e shton atë në vetinë “balance”. Gjithashtu, shtoni një 
objekt transaksioni në grupin “transaksione” me detaje rreth depozitës. Shtoni një metodë në klasën “Bank Account” të quajtur “withdraw” që merr një vlerë dhe e 
zbret nga vetia “balance”. Gjithashtu, shtoni një objekt transaksioni në grupin “transaction” me detaje rreth tërheqjes. Eksporto klasën “BankAccount” nga 
“bank-account.js”

Detyre Shtepie
Krijoni një file të ri të quajtur “bank-account.js” në folderin tuaj të projektit. Në “bank-account.js”, përcaktoni një klasë të quajtur “BankAccount” 
me vetitë e mëposhtme: “pronari”, “balanca” ,“transaksionet” (array). Shtoni një konstruktor në klasën “BankAccount” që merr vlerat për “owner” dhe “bilance” 
dhe i vendos ato Shtoni një metodë në klasën “Bank Account” të quajtur “deposit” që merr një vlerë dhe e shton atë në vetinë “balance”. Gjithashtu, shtoni një 
objekt transaksioni në grupin “transaksione” me detaje rreth depozitës. Shtoni një metodë në klasën “Bank Account” të quajtur “withdraw” që merr një vlerë dhe e 
zbret nga vetia “balance”. Gjithashtu, shtoni një objekt transaksioni në grupin “transaction” me detaje rreth tërheqjes. Eksporto klasën “BankAccount” nga 
“bank-account.js”

kto klase implementojn interface kredi qe ka metoden hasCredit the return boolean type
Bank1 leshon kredi kurse Bank2 nuk leshon kredi
ne main.js te testohen te gjitha metodat

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


const { Bank1, Bank2 } = require('./banks');

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