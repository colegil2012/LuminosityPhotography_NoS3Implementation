var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
    res.render('photoSite/about', {title: 'Luminosity Photography | About'});
});

module.exports = router;