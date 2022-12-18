const mongoose = require('mongoose');

const NovelSchema = new mongoose.Schema({
    novelName: String,
    novelPrice: Number,
    novelAuthorName: String,
    novelPublisherName: String,
    novelPublishedDate: String,
    numberOfPages: Number,
    novelWeight: Number,
    novelLanguage: String, 
    novelISBNNumber: Number
})

module.exports = mongoose.model("Novel", NovelSchema);