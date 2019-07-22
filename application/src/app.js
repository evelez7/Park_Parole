const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const search = require('./api/middleware/search');
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));

app.set('view engine', 'ejs');

app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.get('/', search, (req, res) => {
    console.log(req.body.searchResult);
    res.send(req.body.searchResult);
});

app.get('/about', function(req, res) {
    res.sendFile('public/pages/about.html', {root: __dirname })
});


app.get('/about/Erick', function(req, res) {
    res.sendFile('public/pages/Erick.html', {root: __dirname })
});

app.get('/about/Jack', function(req, res) {
    res.sendFile('public/pages/Jack.html', {root: __dirname })
});

app.get('/about/Vincent', function(req, res) {
    res.sendFile('public/pages/Vincent.html', {root: __dirname })
});

app.get('/about/Hector', function(req, res) {
    res.sendFile('public/pages/Hector.html', {root: __dirname })
});

app.get('/about/Kevin', function(req, res) {
    res.sendFile('public/pages/Kevin.html', {root: __dirname })
});

app.get('/about/Jimmy', function(req, res) {
    res.sendFile('public/pages/Jimmy.html', {root: __dirname })
});

module.exports = app;

app.listen(port, function () {
    console.log("Listening on ${port}");
});