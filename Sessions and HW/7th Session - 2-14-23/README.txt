//Moduli path
Per me manipulu neper direktoriume.

//Path
const path= require('path');
//na i kthen disa metoda te path si per objekti, file system.
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

//Me kriju 1 file, lexu, ndryshu, fshi me 1 folder
//Write
// Create the directory if it doesn't exist
if (!fs.existsSync('Files')) {
  fs.mkdirSync('Files');
  console.log('Directory created');
}

// Write the file to the directory
fs.writeFile('Files/text1.txt', 'Hello World!', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File written successfully');
  }
});

  //Read
  fs.readFile('Files/text1.txt', function(err, data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data.toString());
  })

//Rename
fs.renameSync('Files/text1.txt', 'Files/newText.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed!');
});

//Delete
const filePath = 'Files/newText.txt';

// Check if the file exists
if (fs.existsSync(filePath)) {
  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File deleted successfully');
    }
  });
}

//Callback function
Na kthen pergjigje nese eshte kryj 1 funksion
try and catch block per me i handle errorat
callback hell kur kena nested callback functions
//Promise
Mnyre tjeter me i handle errorat qe doket ma mire
//Emiter
Sa here na e ekzektuojme nje proces ne Js ai e ka aftesi hala pa u kry procesi me ta gjujt 1 njoftim edhe me t'tregu qe ka ndodhe dicka. 
Shftyezohen edhe per notification.