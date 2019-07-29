const router = require('express').Router();

router.get('/', function(req, res) {
    res.sendFile('public/pages/login.html', {root: './'});
});

router.post('/', function(req, res){
    //TODO for registration
});

module.exports = router;