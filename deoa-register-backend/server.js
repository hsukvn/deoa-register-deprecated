'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get("/user", function(req, res) {
	const users = [{
		"name": "mimi",
		"mail": "lo.aiming@gmail.com",
		"passwd": "some hashed passwd" // will not be given in GET
	}];
	res.status(200).json(users);
});

app.get("/event", function(req, res) {
	const events = [{
		"name": "paseminar",
		"description": "pa seminar description",
		"place": [{
			"location": "NTU",
			"date": 1488979285,
			"limit": 30,
			"meta": "in NTU"
		}, {
			"location": "Eslite",
			"date": 1488979504,
			"limit": 40,
			"meta": "in Eslite"
		}]
	}];
	res.status(200).json(events);
});

app.get("/register", function(req, res) {
	const registers = [{
		"mail": "lo.aiming@gmail.com",
		"register": [{
			"name": "paseminar",
			"location": "NTU",
			"date": 1488979285
		}]
	}];
	res.status(200).json(registers);
});

var server = app.listen(8000, function () {
	console.log("Listening on port %s...", server.address().port);
});

