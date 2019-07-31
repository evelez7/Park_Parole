const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req,res) => {
	console.log(req.body.password);
	console.log(req.body.username);
	bcrypt.hash(req.body.password, 10, (err, hash) => {
		if(err){
			return res.status(500).json({
				error: err
			});
		} else {
			db.query('INSERT INTO User SET ?', {Email: req.body.username, Password: hash}).then(([result, _]) => {
				console.log(result);
				const token = jwt.sign({
					Id: req.body.id,
					Email: req.body.Email,
				},
				"secret"
				)
				res.status(200).json({
					Id: result.insertId,
					token: token,
				});
				return;
			})
		}
	})
}

exports.login = (req, res) => {
	db.query('SELECT * FROM User WHERE Email = ?', req.body.username).then(([user, _]) => {
		if(user == ""){
			res.status(404).json({

			});
		} else {
			bcrypt.compare(req.body.password, user[0].Password,  (err,result) =>  {
				if(result){
					const token = jwt.sign({
						Id: user[0].id,
						Email: user[0].Email,
					},
					"secret")
					res.status(200).json({
						Id: user[0].id,
						token: token,
					});
					return;
				}
			})
		}
	});
}
