var express = require('express');
var router = express.Router();
//Session 6 - thirrja e file system
const fs = require('fs');
//Me i listu
//console.log(fs);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', session:'Session 5' });//shtimi per testim i session 5

//WRITE FILE
//   fs.writeFile('text1.txt', 'Hello World!', function (err){
//     if(err){
//       console.log(err);
//     }else{
//       console.log("File written successfully");
//     }
//   })

// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session:'Session 5' });//shtimi per testim i session 5

  //WRITE FILE REFACTOR
  fs.writeFile('text1.txt', 'Hello World!', function (err){
    if(err){
      console.log(err);
      return;
    }
    console.log("File written successfully");
  })

  //READ FILE KTHEN STRING
  // fs.readFile('text1.txt', function(err, data){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log(data);
  // })

  // fs.readFile('text1.txt', 'utf8', function(err, data){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log(data);
  // })

  //toString() mnyra tjeter per me kthy tekstin
  fs.readFile('text1.txt', function(err, data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data.toString());
  })

});


module.exports = router;
