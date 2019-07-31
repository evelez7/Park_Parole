/**
 * Controller file for issues, including search and creation
 * 
 * Author: Erick Velez
 */

const db = require('../models/database.js');

module.exports = {

    /** 
     * search is called by result.html's GET function, which is redirected to from every page
     * through the search bar
     * 
     * returns RESULTS, a collection of issues matching SEARCHTERM, within the body of the HTTP request
     * The HTTP request originates from the page that the search was submitted in.
     */
    search : function (req, res, next) {
        //user's search term
        var searchTerm = req.query.search;
        //user's selected category
        var category = req.query.category;

        let query = 'SELECT * FROM Issue';
        if (searchTerm != null && category != null) {
            query = `SELECT * FROM Issue WHERE Category = '` + category + `' AND Location LIKE '%` + searchTerm + `%'`;
        } else if (searchTerm != null && category == null) {
            query = `SELECT * FROM Issue WHERE Location LIKE '%` + searchTerm + `%'`;
        } else if (searchTerm == null && category != null) {
            query = `SELECT * FROM Issue WHERE Category = '` + category + `'`;
        }
        db.query(query, function (err, results, fields) {
            if (err) { //TODO: properly handle errors
                req.body.searchResult = "";
                req.body.searchTerm = "";
                req.body.category = "";
                next();
            }
            
            req.body.searchResult = results; //collection of issues
            req.body.searchTerm = searchTerm;
            req.body.category = category;
            next();
        });
    }
};