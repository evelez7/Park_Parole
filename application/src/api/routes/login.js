const router = require('express').Router();

router.get('/', function(req, res) {
    res.sendFile('public/pages/login.html', {root: './'});
});

/** POST function for search */
router.post('/', function(req, res){
    console.log("submitted search");
    res.redirect(302, '/results');
});

/** POST function for login */
router.post('/submit', function (req, res) {
    console.log("submitted login");
});

module.exports = router;