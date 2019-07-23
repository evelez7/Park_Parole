
const db = require('../models/database.js');

module.exports = {
    issues: function (req, res, next) {
        //user's search term
        var searchTerm = req.query.search;
        //user's selected category
        var category = req.query.category;
        //users: function
        var username = req.query.user;
        // "myName"
        var password = req.query.password;
        // "password"

        // req.query.search (looks for passward function)

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