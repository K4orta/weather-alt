var express = require('express');
var fetch = require('isomorphic-fetch');
var cors = require('cors');

var app = express();
var SERVER_PORT = 3000;

app.get('/', function(req, res) {
	res.send('Yo');
});

app.get('/weather/:lat/:lng', cors(), function(req, res) {
	fetch('https://api.forecast.io/forecast/fdee7c4422628a201c5428b19e849148/' + req.params.lat + ',' + req.params.lng)
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		res.json(data);
	});
});

app.use(express.static('dist'));

var server = app.listen(SERVER_PORT, function() {
	console.log('Started server on port ' + SERVER_PORT);
});

