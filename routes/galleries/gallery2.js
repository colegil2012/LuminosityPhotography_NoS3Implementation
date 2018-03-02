var express = require('express');
var router = express.Router();
var Photo = require('../../models/photo');

router.get('/gallery2', function(req, res, next) {
    Photo.find({ galleryNum : 2 },function (err, docs) {
        var photoChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            photoChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('photoSite/galleries/gallery2', {title: 'Brittany Gilbert | Gallery 2' , photos: photoChunks });
    });
});


module.exports = router;