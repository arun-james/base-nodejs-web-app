var express = require('express');

var app = express();

app.use(express.static('static'));

app.use('/css',express.static(__dirname+'/static/css'));
app.use('/images',express.static(__dirname+'/static/images'));
app.use('/js',express.static(__dirname+'/static/js'));
app.use('/php',express.static(__dirname+'/static/php'));
app.use('/webfonts',express.static(__dirname+'/static/webfonts'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(8080, function() {
    console.log("Server Started...");
});