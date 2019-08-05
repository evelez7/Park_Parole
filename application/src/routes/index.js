/** 
 * Routing file for the / URL, which processes all of its HTTP requests
 *
 * Author: Erick Velez  
 */
const router = require('express').Router();

router.get('/', function (req, res)  {
    res.sendFile('/public/pages/index.html', {root: './'});
});

router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

module.exports = router;