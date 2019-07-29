const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const port = 3000;

/** Use body parser before importing routes */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/** begin importing all routes */
const indexRouter = require('./api/routes/index'),
    aboutRouter = require('./api/routes/about'),
    resultsRouter = require('./api/routes/results'),
    loginRouter = require('./api/routes/login'),
    signUpRouter = require('./api/routes/signup');

/** begin middleware use for routes */
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/results', resultsRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);
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