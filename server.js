var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 3000;
var Task = require('./api/models/todoListModel'); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb',  { useNewUrlParser: true, useUnifiedTopology: true })
	.catch((err) => {
		console.error("ERROR CONNECTING TO DB.");
	});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


// Default 404 route
app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);