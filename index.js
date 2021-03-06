var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

// views is directory for all template files
app.set('views', __dirname + '/partials');
app.set('view engine', 'htm');

app.get('/', function(request, response) {
  response.render('default.htm');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


