Event
Cdo here qe useri qe ne client side klikon nje buton apo ben reload faden e ben trigger nje event me ndodhe.
NodeJs event driven architecture. Nje pjese e madhe e NodeJs thirre prej modulit ne modul.

//Events
const EventEmitter = require('event');
//Kjo eshte klase per qat arsyje fillon me te madhe
const event= new EventEmitter();
//Kena kriju instance
console.log(event);

Cka eshte klasa?

Cka eshte objekti?

Konceptet e OOP?

Cka jon konceptet?

Cka jon getters setters? Pse me ju qase mes ktyne jo variables?
Nese kanihere kena thon mos tkhe null me ju qase me variabel cka kish shkru useri nuk ish validu po me metode set na ja kena caktu.

Abstraksion i plote interface, kurse klasa abstrakte edhe metoda abstrakte edhe normale.

Trashegimia - qysh i kena thirre preperties te klases te trashegume eshte me super, kurse me this ato qe jane ne te klase.

/*
Krijo nje app node/express ku thirret moduli event . krijo/thirr eventin me emer “runEvent_1” i cili kur thirreth  return “Hello from events”. 
Krijo nje evnet tjeter ku ne parameter pranon nje objekt obj1= {init:‘Node’,version ‘18’} dhe kthen mesazhin “object from events: {init:‘Node’,version ‘18’}” . 
krijo ne evnet tjeter “testEvent” ku kthen mesazhin “only test”. shfqaq numrin total te eventeve dhe ne fun fshij evnetin “testEvent”. Krijo nje repo te re, push 
aplikacionin ne branch example-event-1 duke shtuar paraprakisht edhe .gitignore file.
*/
// const EventEmmiter=require("events");
//     const event=new EventEmmiter();
//     // console.log(event);
//     //First request
//     event.on('runEvent_1',()=>{
//         console.log('Hello from events')
//     })
//     event.emit('runEvent_1');
//     //Second request
//     const obj={
//         init:'Node',
//         version: '18'
//     }
//     event.on('event2',(obj)=>{
//         console.log(`objects from events ' ${JSON.stringify(obj)} `)
//     })
//     event.emit('event2',obj);
//     //test event
//     event.on('testEvent',()=>{
//         console.log('only test')
//     });
//     event.removeAllListeners('testEvent');
//     //Third request
//    const events=  event.eventNames();
//    console.log(events)
//    events.forEach(eventNames =>{
//     const count=event.listenerCount(eventNames);
//     console.log("Total number of listeners"+`${eventNames} : ${count}`)
//    })

/*
Pasi kemi  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; Te krijohet nje metod “getEvenNumbers” qe kthen vetem numrat qift. Te shfaqen ne eventin EvenEvent. 
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

function getEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  myEmitter.emit('EvenEvent', evenNumbers);
  return evenNumbers;
}

console.log(getEvenNumbers(numbers));

/*

*/
class Counter extends EventEmitter {
  constructor(initialValue) {
    super();
    this._value = initialValue;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.emit('increment', val);
  }
}

const counter = new Counter();

counter.on('increment', (val) => {
  console.log(`Counter value: ${val}`);
});

counter.value=1;
counter.value=2;
counter.value=3;

// git checkout -b feature/branch
// git add .
// git commit -m "mesazhi"
// git push
// git push --set-upstream origin feature/emri i branch