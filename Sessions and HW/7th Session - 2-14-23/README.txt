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