const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../models/type');
require('../models/account');


const Record = new Schema({
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: Number,
        ref: 'Type',
    },
    concept: String,
    account: {
        type: Number,
        ref: 'Account',
    },
    place: String,
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Record', Record);