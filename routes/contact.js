var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
    res.render('photoSite/contact', {title: 'Luminosity Photography | Contact'});
});

module.exports = router;
