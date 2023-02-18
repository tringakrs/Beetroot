var express = require('express');
var router = express.Router();
//Session 8
const EventEmitter = require('events')

/* GET users listing. */
router.get('/', function(req, res, next) {

//Session 5
// const obj1 = {name: 'Tringa'};
// const array1 = ['tringa', 'krasniqi']
// console.log(obj1);

// //ARRAY
// array1.push("banana", "apple", "peach");
// console.log(array1.length);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));

// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// const array2 = [1, 4, 9, 16];
// const map1 = array2.map(x => x * 2);
// console.log(map1);

// const words = ['tringa', 'krasniqi', 'dicka', 'tjeter', 'whatever', 'nodejs'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const stuff = ['laps', 'kimik', 'vizore', 'banke'];
// console.log(animals.lastIndexOf('banke'));

// //OBJEKTI
// const obj2 = {
//   a: 'string',
//   b: 42,
//   c: false
// };
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));

// console.log(Object.is('1', 1));

// const obj3 = {
//   property1: 42
// };

// console.log(Object.isFrozen(obj3));
// Object.freeze(obj3);
// console.log(Object.isFrozen(obj3));

//Session 6
//Me shti array ne Objekt
// console.log({array1});

//Session 8
const event= new EventEmitter();
//EventEmitter eshte klase per qat arsyje fillon me te madhe.
//Kena kriju instance

console.log(event);
//Kthen metoda te event

//event.on()
event.addListener('event1', ()=>{
  console.log('fire event1')
})
//Komplet njejt response on edhe addListener. Kto na mundesoje qe te emit me mujt me thirre event

//Thirrja e nje eventi
event.emit('event1');

//eventNmes
console.log(event.eventNames());
//kthen ['event1']

eventEmitter.on(event1, listener)
eventEmitter.once(event1, listener)

server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});

   res.send('respond with a resource');
});

module.exports = router;
