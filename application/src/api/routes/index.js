/** Router file for index.html, which processes all of its HTTP requests */
const router = require('express').Router();

router.get('/', function (req, res)  {
    res.sendFile('/public/pages/index.html', {root: './'});
});

router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

module.exports = router;