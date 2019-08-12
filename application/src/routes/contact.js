/**
 * Routing file for the /post URL, which processes all of its HTTP requests
 */

const router = require('express').Router();

router.get('/', function(req, res) {
    res.render('contact.html', {
        category: "" //Must render something for category, make it blank
    });
});

module.exports = router;