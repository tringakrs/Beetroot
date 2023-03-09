/*
Te krijohet express new app CRUD per entitetitn Person. Fillimisht te krijohet klasa Person qe permbane konstruktor me property id name dhe age. Ne app.js:
Te thirret klasa person.js dhe te krijohet nje array pople e cila thirr 3 inctanca te person p.sh let pople=[new Person(1,‘Emri’,30),…]
Te krijohet endpoint qe kthen ne formatin json te gjith personat
Te krijohet endpoint qe kthen personin permes parametrit id
Te krijohet endpoint qe shton person ne people array
Te krijohet endpoint qe ben update permes parametrit id personin specifik
Te krijohet endpoint qe ben delete permes parametrit id personin specifik
Nese ne metodat ku kemi parameter id dhe nuk egziston ajo id ne array duhet te kthehet status code 404
*/

class Person {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }
  
  module.exports = Person;
  