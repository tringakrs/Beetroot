const Person = require('./person');

// Krijoni një instancë të klasës "Person"
const person1 = new Person('John', 25, 'mashkull', 'john@example.com');

// Testo metoden "introduce"
console.log(person1.introduce());

// Testo metodat
console.log(person1.emri); // John
person1.emri = 'Jane';
console.log(person1.emri); // Jane

console.log(person1.mosha); // 25
person1.mosha = 30;
console.log(person1.mosha); // 30

console.log(person1.gjinia); // mashkull
person1.gjinia = 'femer';
console.log(person1.gjinia); // femer

console.log(person1.email); // john@example.com
person1.email = 'jane@example.com';
console.log(person1.email); // jane@example.com
