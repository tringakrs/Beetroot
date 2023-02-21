/*
Ushtrimi 1: express app (without express-generator)
Krijoni një file  “person.js”
*/
//Në “person.js”, krijo një klasë të quajtur “Person” me attibutet e mëposhtme: “emri” , “mosha”, “gjinia” dhe “email”.
class Person {

//Shtoni një konstruktor në klasën “Person” që merr vlera për secilën nga atributet

    constructor(emri, mosha, gjinia, email) {
      this._emri = emri;
      this._mosha = mosha;
      this._gjinia = gjinia;
      this._email = email;
    }

//Shtoni një metodë në klasën “Person” të quajtur “introduce” që kthen një varg që prezanton: personin me emrin, moshën dhe gjininë e tij.

    introduce() {
      return `Unë jam ${this._emri}, ${this._mosha} vjeç ${this._gjinia}.`;
    }

//Beje enkapsulimin e atributeve

    // Metoda për marrjen e emrit
    get emri() {
      return this._emri;
    }
  
    // Metoda për vendosjen e emrit
    set emri(emri) {
      this._emri = emri;
    }
  
    // Metoda për marrjen e moshës
    get mosha() {
      return this._mosha;
    }
  
    // Metoda për vendosjen e moshës
    set mosha(mosha) {
      this._mosha = mosha;
    }
  
    // Metoda për marrjen e gjinisë
    get gjinia() {
      return this._gjinia;
    }
  
    // Metoda për vendosjen e gjinisë
    set gjinia(gjinia) {
      this._gjinia = gjinia;
    }
  
    // Metoda për marrjen e emailit
    get email() {
      return this._email;
    }
  
    // Metoda për vendosjen e emailit
    set email(email) {
      this._email = email;
    }
  }

//Eksporto klasën “Person” nga “person.js”. krijo inctancen , testo metodat.
 // Exportimi i klasës "Person" nga "person.js"
 
  module.exports = Person;
  