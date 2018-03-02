var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
    res.render('photoSite/about', {title: 'Brittany Gilbert | About'});
});

module.exports = router;