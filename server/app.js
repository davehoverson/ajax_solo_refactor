/**
 * Created by davidhoverson on 9/25/15.
 */
var express = require('express');
var app = express();
var colors = require('../models/data');

app.use(express.static(__dirname + '/public'));

app.get('/' , function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getColors', function(req, res){
    res.send(colors);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;