var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session:'Session 5' });//shtimi per testim i session
});

module.exports = router;
