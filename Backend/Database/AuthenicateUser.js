const mongoose = require('mongoose');

const AuthenticateUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("userauthentications", AuthenticateUserSchema);