const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	register : function (req, res, next) {
		console.log(req.body.password);
		console.log(req.body.username);
		bcrypt.hash(req.body.password, 10, (err, hash) => {
			if(err){
				return res.status(500).json({
					error: err
				});
			} else {
				db.query('INSERT INTO User SET ?', {First_Name: req.body.firstName, Last_Name: req.body.lastName, Email: req.body.email, Password: hash}).then(([result, _]) => {
					console.log(result);
					const token = jwt.sign({
						Id: req.body.id,
						First_Name: req.body.firstName,
						Last_Name: req.body.lastName,
						Email: req.body.Email,
					},
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
				bcrypt.compare(req.body.password, user[0].Password,  (err,result) =>  {
					if(result){
						const token = jwt.sign({
							Id: user[0].id,
							firstName: user[0].First_Name,
							lastName: user[0].Last_Name,
							Email: user[0].Email,
						},
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
