const express = require('express');
//referohem me express me i overwrite node
const app = express();

// app.use('/', function (req,res,next) {
//     console.log('me web');
// })

app.listen(3000, '127.0.0.1', function () {
    console.log(app);
    console.log('Express server lsitening in port 3000');
})