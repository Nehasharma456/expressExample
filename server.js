var express = require('express');
var app= express();
var path = require('path');
var routes = require('./routes/user');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/api', routes);

app.listen(3000, function(req, res){
console.log('server is running on port 3000.....');
});
