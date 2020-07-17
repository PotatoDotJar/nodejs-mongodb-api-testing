var express = require('express');
var { MongoClient } = require('mongodb');

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
	if (err) throw err;
	console.log("Database created!");


	var dbo = db.db("mydb");

	dbo.createCollection("customers", function (err, res) {
		if (err) throw err;
		console.log("Collection created!");



		var myobj = { name: "Company Inc", address: "Highway 37" };
		dbo.collection("customers").insertOne(myobj, function (err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			console.log(res);
			db.close();
		});

		
	});




});