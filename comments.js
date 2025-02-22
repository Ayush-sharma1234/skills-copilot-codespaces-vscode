// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var formidable = require('formidable');
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'comments'
});
connection.connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// create a server
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running on http://%s:%s", host, port);
});