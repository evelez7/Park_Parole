const db = require('../models/database.js');

exports.getIssues = (req, res, next) => {
    db.query('SELECT * FROM `Issue` WHERE `Category` = "1"')
    .then( (data) => {
        console.log(req.userData);
        res.status(200).json({
            status: true,
            event: data[0], 
            message: "retrieved successfully"
        })
    })
    .catch( err => {
        res.status(500).json({
            status: false,
            message: err
        })
    })
}