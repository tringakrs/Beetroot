// const promis = new Promise ((resolve, reject) => {
//     const i =1;
//     if(i===1){
//         resolve()
//     }else{
//         reject()
//     }
// });
// console.log(promis)

// promis.then(function(){
//     console.log('Pass');
// }).catch(function(){
//     console.log('Error')
// })

//Detyra 1
//Krijo nje metod writeFile(path) the nje metode tjeter readFile(path) dy metodat duhet te trajtohen me promise nese kan resolve ose reject. 
//Te thirret promis i tyre.
// const fs = require('fs');

// const promis = new Promise((resolve, reject) => {
//     fs.writeFile("fileFromPromise1.txt", "Helloworld", (err) => {
//         if (err) reject(err)
//         else resolve()
//     })
// })


// const promis1 = new Promise((resolve, reject) => {
//     fs.readFile("fileFromPromise1.txt", "utf-8", (err, data) => {
//         if (err) reject(err)
//         else resolve(data)
//     })
// })


// promis.then(function () {
//     console.log("File created succesfully")
// }).catch(function () {
//     console.log("Error creating file")
// })



// promis1.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// //Detyra 2
// //Krijo një funksion readDirectory(directoryPath) që lexon një direktori permes readdir dhe kthen një promis nese ka mundur ta gjej apo shfaq error.
// const promis2 = new Promise((resolve, reject) => {
//     fs.readdir("./", (err, data) => {
//         if (err) reject(err)
//         else resolve(data)
//     })
// })

// promis2.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

//Detyra 3
//Krijo nje funksion reverseString(str) qe ka nje parameter ku kthen promis vetem nese parametri eshte type string dhe ben 
//reverse stringun p.sh Hello kthen olleH. nese kemi data type tjeter duhet te behet reject
const reverseString = (str) => {
    return new Promise((resolve, reject) => {
      if (typeof str === 'string') {
        const reversedStr = str.split('').reverse().join('');
        resolve(reversedStr);
      } else {
        reject(new Error('Input is not a string'));
      }
    });
  };
  
  reverseString(1)
    .then((result) => {
      console.log(result); // reversed String
    })
    .catch((err) => {
      console.error(err.message); // "Input is not a string"
    });
  