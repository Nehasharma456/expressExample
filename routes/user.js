var express = require('express');
var router = express.Router();

router.get('/Show', function(req, res) {
  console.log('default route is called');
   res.end();
});

router.get('/', function(req, res){
  res.render('index');
});

module.exports = router;
