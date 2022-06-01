const express = require('express');
const fs = require('fs')
const prort = 8080

const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html')
});

app.get('/css/index.css', function (req, res) {
    res.sendFile(__dirname + '/css/index.css')
});
app.all('*', function(req, res){
    res.status(404).sendFile(__dirname + '/html/404.html')
});

app.listen(prort, function () {
    console.log(`listening on ${prort}`)
});


