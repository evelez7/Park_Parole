/**
 * Routing file for the /post URL, which processes all of its HTTP requests
 */
const router = require('express').Router();

router.get('/', function(req, res) {
    res.sendFile('public/pages/post.html', {root: './'});
});

/** POST function for search */
router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

/** POST function for submitting post */
router.post('/submit', function (req, res) {
    console.log("submitted post");
});

module.exports = router;