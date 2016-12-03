var express = require('express');

var app = express();


var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

var fortune = [
"Invinge frica ori ea te va invinge",
"Riurile au nevoe de izvor",
"Nu te teme de necunoscut",
"Te asteapta o surpriza placuta",
"Fii simplu"
];

app.get('/', function(req, res) {
	res.render('home');
});
app.get('/about', function(req, res) {
  var randomFortune =
  fortune[Math.floor(Math.random()*fortune.length)];
res.render('about',{ fortune: randomFortune});
});

// Pagina 404
app.use (function(req,res,next){
  res.status(404);
  res.render('404');
});
//Pagina 500
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
console.log('Aplicatia ruleaza pe adrsa http://localhost:' + app.get('port') + ' Tastati Ctrl + C pentru sfirsit');
});
