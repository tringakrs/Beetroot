const os = require('node:os');

//operating system CPU architecture
console.log("Metoda os.arch");
console.log(os.arch());
console.log(' ');

//commonly used operating system-specific constants for error codes, process signals, and so on.
console.log("Metoda os.constraints");
console.log(os.constants);
console.log(' ');

//Returns an array of objects containing information about each logical CPU core.
console.log("Metoda os.cpus");
console.log(os.cpus());
console.log(' ');

//The platform-specific file path of the null device.
console.log("Metoda os.devNull");
console.log(os.devNull);
console.log(' ');

//Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
console.log("Metoda os.endianness");
console.log(os.endianness());
console.log(' ');

//Returns the amount of free system memory in bytes as an integer.
console.log("Metoda os.freeman");
console.log(os.freemem());
console.log(' ');

//Returns the string path of the current user's home directory.
console.log("Metoda os.homedir");
console.log(os.homedir());
console.log(' ');

//Returns the host name of the operating system as a string.
console.log("Metoda os.hostname");
console.log(os.hostname()); 
console.log(' ');

//Returns an array containing the 1, 5, and 15 minute load averages.
console.log("Metoda os.loadavg");
console.log(os.loadavg());
console.log(' ');

//Returns an object containing network interfaces that have been assigned a network address.
console.log("Metoda os.networkInterfaces");
console.log(os.networkInterfaces());
console.log(' ');

//Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log("Metoda os.platform");
console.log(os.platform());
console.log(' ');

//Returns the operating system as a string.
console.log("Metoda os.release");
console.log(os.release());
console.log(' ');