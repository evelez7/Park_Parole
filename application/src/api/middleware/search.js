
const db = require('../models/database.js');

module.exports = ( req, res, next ) => {
    //user's search term
    var searchTerm = req.query.search;
    //user's selected category
    var category = req.query.category;

    let query = 'SELECT * FROM Issue';
    if (searchTerm != null && category != null){ 
        query = `SELECT * FROM Issue WHERE Category = '` + category + `' AND Location LIKE '%` + searchTerm + `%'`;
    }
    else if (searchTerm != null && category == null){
        query = `SELECT * FROM Issue WHERE Location LIKE '%` + searchTerm + `%'`;
    }
    else if ( searchTerm == null && category != null){
        query = `SELECT * FROM Issue WHERE Category = '` + category + `'`;
    }
    db.query(query, (err, result) => {
        req.body.searchResult = result;
        next();
    });
};