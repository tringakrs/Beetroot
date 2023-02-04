let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
//var global variable
//let ma mire se munet me u bo updated amo jo me u rideklaru, ma i shpejt

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//set ndryshon dicka. Per variablen view me bashku me dirname
//dirname variabel globale qe na e then komplet path qe aplikacionit
//views i qaset folderit view
app.set('view engine', 'jade');
//jade engine - temp engine din me komuniku me server side edhe me client

app.use(logger('dev'));
//use eshte main middleware me app.use thirren middleware
/*middleware ne esence eshte metode amo bohet run para metodave psh user, controller. 
e pranon req, res edhe next qe i ka parametra. edhe ne mundemi me kriju middleware. 
nese e kthejme nje req middleware kthen res nje mesazh. 
edhe performanca(se kur vine plot req palidhje ne i kthejme pa u testu kshtu minimizon kohen) edhe siguria bohet me middleware.
next metoda thot nese gjithcka shkon mire vazhdo ne metoda.*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//localhost:3000 -domain, /test - parameter
//domain nuk kemi nevoje me encode se nuk kan api '/', '.', '""', etj. 
//Kto simbolika encoder i konverton me nje simbol qe nuk e len me rrezu serverin apo si ben dem serverit.
app.use(cookieParser());
//
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
