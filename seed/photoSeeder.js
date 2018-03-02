var Photo = require('../models/photo');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/photography');


var photos = [
    new Photo({
        imagePath: '/images/EllieCloseUp.jpg',
        galleryNum: 1,
        description: 'Close up of my dog Ellie (Pug/Chihuahua Mix)',
        anchor: '/gallery1',
        galleryHeader: true,
        galleryName: "Dogs"
    }),
    new Photo({
        imagePath: '/images/Park.jpg',
        galleryNum: 2,
        description: 'Park in Mount Washington, KY',
        anchor: '/gallery2',
        galleryHeader: true,
        galleryName: "Nature"
    }),
    new Photo({
        imagePath: '/images/Neptune_Sundial.jpg',
        galleryNum: 3,
        description: 'Neptune\'s Sundial in South Carolina',
        anchor: '/gallery3',
        galleryHeader: true,
        galleryName: "Destinations"
    }),
    new Photo({
        imagePath: '/images/EllieSad.jpg',
        galleryNum: 1,
        description: 'Ellie pouting on the couch',
        anchor: '/gallery1',
        galleryHeader: false
    }),
];


var done = 0;
for (var i = 0; i < photos.length; i++) {
    photos[i].save(function(err, result) {
        done++;
        if (done === photos.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}