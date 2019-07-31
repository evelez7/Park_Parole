const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const port = 3000;

/** Use body parser before importing routes */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/** begin importing all routes */
const indexRoute = require('./api/routes/index'),
    aboutRoute = require('./api/routes/about'),
    resultsRoute = require('./api/routes/results');

/** begin middleware use for routes */
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/results', resultsRoute);
app.use(morgan('dev'));


/** static directories config */
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));

/** template engine config */
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.listen(port, function () {
    console.log("Listening on port 3000");
});