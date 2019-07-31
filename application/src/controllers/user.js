/*
	User related functions, login and registration. 

	Author: Jimmy Kwan and Vincent 
*/
const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	
	//user registration, grabs user input from the signUp page. 
	
	register : function (req, res, next) {
		bcrypt.hash(req.body.password, 10, (err, hash) => {
			if(err){
				return res.status(500).json({
					error: err
				});
			} else {
				//put name, email, and password into database
				db.query('INSERT INTO User SET ?', {First_Name: req.body.firstName, Last_Name: req.body.lastName, Email: req.body.email, Password: hash}).then(([result, _]) => {
					const token = jwt.sign({
						Id: req.body.id,
						First_Name: req.body.firstName,
						Last_Name: req.body.lastName,
						Email: req.body.Email,
					},
					//token is "secret"
					"secret"
					)
					res.status(200).json({
						Id: result.insertId,
						token: token,
					});
				})
			}
		});	
	}, 

	login : function (req, res, next) {
		db.query('SELECT * FROM User WHERE Email = ?', req.body.email).then(([user, _]) => {
			if(user == ""){
				res.status(404).json({
	
				});
			} else {
				//grab the specific user from database
				bcrypt.compare(req.body.password, user[0].Password,  (err,result) =>  {
					if(result){
						const token = jwt.sign({
							Id: user[0].id,
							firstName: user[0].First_Name,
							lastName: user[0].Last_Name,
							Email: user[0].Email,
						},
						//token is "secret"
						"secret")
						res.status(200).json({
							Id: user[0].id,
							token: token,
						});
					}
				});
			}
		});
	}
}