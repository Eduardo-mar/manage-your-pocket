const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema({
    _id: Number,
    name: String,
});

module.exports = mongoose.model('Account', Account);