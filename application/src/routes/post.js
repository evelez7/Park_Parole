/**
 * Routing file for the /post URL, which processes all of its HTTP requests
 */
const router = require('express').Router();

const postIssue = require('../controllers/postIssue');

const auth = require('../api/middleware/check-auth');

const multer = require('multer');
const upload = multer({dest: '/public/images'});

router.get('/', function(req, res) {
    res.render('post.html', {
        category: "" //Must render something for category, make it blank
    });
});

/** POST function for search */
router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

/** POST function for submitting post */
router.post('/submit', upload.single('image') , postIssue.post, function (req, res) {
    console.log("submitted post");
    res.redirect(302, '/');
});

module.exports = router;