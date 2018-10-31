var express = require('express');
var router = express.Router();
var Photo = require('../../models/photo');

router.get('/gallery4', function(req, res, next) {
    Photo.find({ galleryNum : 4 },function (err, docs) {
        var photoChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            photoChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('photoSite/galleries/gallery4', {title: 'Luminosity Photography | Gallery 4' , photos: photoChunks });
    });
});


module.exports = router;/**
 * Created by Cole on 9/18/2017.
 */
