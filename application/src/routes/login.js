/**
 * Routing file for the /login URL, which processes all of its HTTP requests
 * 
 * Author: Erick Velez
 */
const router = require('express').Router();

const user = require('../controllers/user');

router.get('/', function(req, res) {
    res.render('login.html', {
        category: "" //Must render something for category, make it blank
    });
});

/** POST function for search */
router.post('/', function(req, res){
    res.redirect(302, '/results');
});

/** POST function for login */
router.post('/submit', user.login, function (req, res) {
    console.log("submitted login");
    res.redirect(302, '/');
});

module.exports = router;