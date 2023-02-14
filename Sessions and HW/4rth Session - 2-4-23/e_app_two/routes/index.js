var express = require('express');
var router = express.Router();
//Session 6 - thirrja e file system
const fs = require('fs');
const { dirname } = require('path');
//Me i listu
//console.log(fs);

//Session 7 - path
const path= require('path');

console.log(path);

//Path metodat
const pathTestDir = path.basename(__dirname);
const pathTestFile = path.basename(__filename);
const pathTestExt = path.extname(__filename);//me bo dirname nuk na kthen se folder nuk ka extension

console.log(pathTestDir);
console.log(pathTestFile);
console.log(pathTestExt);

var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }

var p = path.format(obj);
console.log(p);

console.log(path.parse('/home/user/dir/file.txt'));

var x = path.normalize('Users/Refsnes/../Jackson');
console.log(x);

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('/baz/..'));
console.log(path.isAbsolute('qux/'));
console.log(path.isAbsolute('.'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// Returns: '/foo/bar/baz/asdf'

//path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'






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

/*  //WRITE FILE REFACTOR
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

//Append
fs.appendFile('text1.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//masi async po e mbishkrun e pe kryn procesin ma t'shpejt qka munet kshtu qe duhet sinkron

//Rename
fs.rename('text1.txt', 'newFileName.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed!');
});
*/
});

module.exports = router;
