/**
 * The routing file for the /results URL, which process all of its HTTP requests
 */
const router = require('express').Router();

/** Import issues module */
const issues = require('../controllers/issues');

/**
 * The GET mehtod for results.html
 * 
 * After redirecting from a POST request through a search bar, this method calls
 * search.issues, which will take the search term from the request's body and 
 * query the database. The relevant search result is then rendered to results.html
 */
router.get('/', issues.search, function(req, res) {
    let searchResult = req.body.searchResult;
   
    res.render('results.html', {
        searchResultsLength : searchResult.length,
        searchTerm : req.searchTerm,
        searchResults : searchResult,
        category : req.category
    });
});

module.exports = router;