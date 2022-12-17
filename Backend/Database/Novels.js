const mongoose = require('mongoose');

const NovelSchema = new mongoose.Schema({
    name: String,

})

module.exports = mongoose.model("Novel", NovelSchema);