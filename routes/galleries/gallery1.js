var express = require('express');
var router = express.Router();
var Photo = require('../../models/photo');

router.get('/gallery1', function(req, res, next) {
    Photo.find({ galleryNum : 1 },function (err, docs) {
        var photoChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            photoChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('photoSite/galleries/gallery1', {title: 'Luminosity Photography | Gallery 1' , photos: photoChunks });
    });
});


module.exports = router;