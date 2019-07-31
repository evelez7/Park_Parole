const router = require('express').Router();

router.get('/', function(req, res) {
    res.sendFile('public/pages/post.html', {root: './'});
});

module.exports = router;