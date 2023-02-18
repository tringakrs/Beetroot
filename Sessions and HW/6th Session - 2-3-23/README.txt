//Global variable psh log
Global variables are variables that are accessible from anywhere in the program, 
regardless of the location of the code that wants to use them. 
In other words, a global variable has a scope that extends throughout the entire program, 
allowing it to be used by functions and code blocks defined in different parts of the program.
In most programming languages, global variables are declared outside of any function, 
and they can be accessed and modified by any function or code block in the program. 
The use of global variables can make it easier to share data between different parts of a program, 
but they can also make it more difficult to understand the behavior of the program, 
and they can lead to unintended side effects if they are not used carefully.
It's generally considered a best practice to avoid using global variables whenever possible, 
and to instead use local variables that have a more limited scope. When global variables are necessary, 
it's important to document their use and behavior clearly, to minimize the risk of unintended consequences.

//Me kriju branch te ri 
git checkout -b feature/session6
//Me i shiku branch-at
git branch
//Merge branch ne UI ne Git
git push --set-upstream origin feature/EventExample    
//me bo push ne branch te ri

//Modul i Node-it File System
Modul shume i rendesishem se mundemi me pase interaction me PC dhe me Server.
Ne mundemi me rujt imazhe si URL ne db ose si Buffer Binary(data structure per imazhe).
Cka ka sasi te madhe te te dhenave i vendosim ne Server jo db si psh. OS, foto, imazhe, audio.

//Dokumentimi per File System
https://nodejs.org/api/fs.html

//Me kriju edhe me write ne nje File//Session 6 - thirrja e file system
const fs = require('fs');
//Me i listu
console.log(fs);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session:'Session 5' });//shtimi per testim i session 5

  fs.writeFile('text1.txt', 'Hello World!', function (err){
    if(err){
      console.log(err);
    }else{
      console.log("File written successfully");
    }
  })

});

//REFACTOR
router.get('/', function(req, res, next) {
  fs.writeFile('text1.txt', 'Hello World!', function (err) {
    if (err) {
      console.error(err);
      return next(err);
    }

    res.render('index', { title: 'Express', session: 'Session 5' });
  });
});

//SOLID PRINCIPLES PATTERN
Nje metode e kryn vec nje pune nje nga principet

//READ FILE
fs.readFile('text1.txt', function(err, data){
if(err){
    console.log(err);
    return;
}
})
Kur lexohen file ne FS lexohet si buffer binary dhe na kthen String
TERMINAL:
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

//UFT8 e lexon tamon
 fs.readFile('text1.txt', 'utf8', function(err, data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data);
  })

//ose toString()
  fs.readFile('text1.txt', function(err, data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data.toString());
  })

});

//RESEARCH per append edhe renameFile
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
