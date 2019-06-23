const express = require('express');
const app = express();    
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 

const aboutRoutes = require('/api/routes/products'); 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => { 
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if(req.method == 'OPTIONS'){ 
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
})

app.use('/about', aboutRoutes);

app.use((req, res, next) => { 
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
})

module.exports = app;