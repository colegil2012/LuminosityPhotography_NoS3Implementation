var express = require('express');
var router = express.Router();
var Photo = require('../models/photo.js');


router.get('/', function(req, res, next) {
    Photo.find({ galleryHeader: true },function (err, docs) {
        if(err) {

        } else {
            var photoChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                photoChunks.push(docs.slice(i, i + chunkSize));
            }
        }
        res.render('photoSite/index', {title: 'Luminosity Photography | Galleries', photos: photoChunks});
    });
});


module.exports = router;
