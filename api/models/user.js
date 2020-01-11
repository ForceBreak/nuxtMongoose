const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users", userScheme);