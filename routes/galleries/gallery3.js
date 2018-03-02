var express = require('express');
var router = express.Router();
var Photo = require('../../models/photo');

router.get('/gallery3', function(req, res, next) {
    Photo.find({ galleryNum : 3 },function (err, docs) {
        var photoChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            photoChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('photoSite/galleries/gallery3', {title: 'Brittany Gilbert | Gallery 3' , photos: photoChunks });
    });
});


module.exports = router;