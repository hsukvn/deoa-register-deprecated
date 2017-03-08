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
		"passwd": "passwd"
	}];
	res.status(200).json(users);
})

var server = app.listen(8000, function () {
	console.log("Listening on port %s...", server.address().port);
});

