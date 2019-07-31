const router = require('express').Router();

router.get('/', function(req, res){
    res.sendFile('public/pages/signUp.html', {root: './'});
});

router.post('/', function(req, res) {
    res.sendFile('public/pages/signUp.html', {root: './'});
});

module.exports = router;