const http = require('http');

const server = http.createServer((req, res) => { 
});

server.listen(3000, '127.0.0.1', () => {
    console.log('starting server')
});
//test