var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   imagePath: {type: String, required: true},
   galleryNum: {type: Number, required: true},
   description: {type: String},
   anchor: {type: String},
    galleryHeader: {type: Boolean},
    galleryName: {type: String}
});

module.exports = mongoose.model('Photo', schema);