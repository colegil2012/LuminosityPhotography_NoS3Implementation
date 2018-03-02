var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
    res.render('photoSite/contact', {title: 'Brittany Gilbert | Contact'});
});

module.exports = router;
