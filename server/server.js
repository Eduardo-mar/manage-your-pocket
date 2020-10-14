const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const types = require('./routes/types');
const accounts = require('./routes/accounts');
const records = require('./routes/records');
// var admin = require('firebase-admin');

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });

// var refreshToken; // Get refresh token from OAuth2 flow

// admin.initializeApp({
//     credential: admin.credential.refreshToken(refreshToken),
//     databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(records);
app.use(types);
app.use(accounts);

mongoose.connect('mongodb://localhost/manageYourPocket', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err, res) => {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    }
    app.listen(5000, () => {
        console.log("Node server running on http://localhost:5000");
    });
});