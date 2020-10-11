const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Type = new Schema({
    _id: Number,
    name: String,
});

module.exports = mongoose.model('Type', Type);