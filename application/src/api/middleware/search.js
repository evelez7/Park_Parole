
const db = require('../models/database.js');

module.exports = {
    issues: function (req, res, next) {
        //user's search term
        var searchTerm = req.query.search;
        //user's selected category
        var category = req.query.category;
        //users: function
        var username = req.query.username || '';
        // "myName"
        var password = req.query.password || '';
        // "password"

        username = username.replace(/[!@#$%^&*]/g, '');
        if (!username || !password || !users[username]) {
            return res.sendStatus(400);
          }
          crypto.pbkdf2(password, users[username].salt, 10000, 512, function(err, hash) {
            if (users[username].hash.toString() === hash.toString()) {
              res.sendStatus(200);
            } else {
              res.sendStatus(401);
            }
          });

        let query = 'SELECT * FROM Issue';
        if (searchTerm != null && category != null) {
            query = `SELECT * FROM Issue WHERE Category = '` + category + `' AND Location LIKE '%` + searchTerm + `%'`;
        } else if (searchTerm != null && category == null) {
            query = `SELECT * FROM Issue WHERE Location LIKE '%` + searchTerm + `%'`;
        } else if (searchTerm == null && category != null) {
            query = `SELECT * FROM Issue WHERE Category = '` + category + `'`;
        }
        db.query(query, (err, result) => {
            if (err) { //TODO: properly handle errors
                req.body.searchResult = "";
                req.body.searchTerm = "";
                req.body.category = "";
                next();
            }
            req.body.searchResult = result;
            req.body.searchTerm = searchTerm;
            req.body.category = category;
            next();
        });
    }
};