/** 
 * Routing file for the / URL, which processes all of its HTTP requests
 *
 * Author: Erick Velez  
 */
const router = require('express').Router();
const search = require('../controllers/search');

router.get('/', search.parks, function(req, res) {
    console.log(req.body.searchResults[0]['Location']);
    res.render('index.html', {
        category: "", //Must render something for category, make it blank
        searchResults: req.body.searchResults
    });
});

router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

module.exports = router;