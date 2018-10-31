/**
 * Created by Cole on 9/18/2017.
 */
var Photo = require('../models/photo');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/photography2');


var photos = [
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (1).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #1',
        anchor: '/gallery1',
        galleryHeader: true,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (2).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #2',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (3).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #3',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (4).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #4',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (5).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #5',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (6).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #6',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (7).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #7',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (8).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #8',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (9).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #9',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
    }),
    new Photo({
        imagePath: '/images/Gallery1/_KJ1 (10).jpg',
        galleryNum: 1,
        description: 'K & J Engagement Photos #10',
        anchor: '/gallery1',
        galleryHeader: false,
        galleryName: "K & J Engagement"
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