/**
 * Routing file for the /signup URL, which processes all of its HTTP requests
 * 
 * Author: Erick Velez
 */
const router = require('express').Router();

const user = require('../controllers/user');

router.get('/', function(req, res){
    res.sendFile('public/pages/signup.html', {root: './'});
});

/** POST function for search */
router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

/** POST function for signup */
router.post('/submit', user.register, function (req, res) {
    res.redirect(302, '/');
});

module.exports = router;