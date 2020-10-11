const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Type = mongoose.model('Type');
const Account = mongoose.model('Account');


const Record = new Schema({
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: Schema.ObjectId,
        ref: 'Type',
    },
    concept: String,
    account: {
        type: Schema.ObjectId,
        ref: 'Account',
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Record', Record);