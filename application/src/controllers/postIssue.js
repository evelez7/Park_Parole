/*
	User related functions, login and registration. 

	Author: Jimmy Kwan and Vincent 
*/
const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	
	//user registration, grabs user input from the signUp page. 
	
	post : function (req, res, next) {
			
				//put name, email, and password into database
				db.query('INSERT INTO Issue SET ?', {Park: req.body.park, Description: req.body.description, Category: req.body.category, Date: req.body.date, Status: "open"})
				.then(([result, _]) => {
					next();
				})	
	}
}
