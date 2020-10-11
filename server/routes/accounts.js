const Account = require('../models/account');
const express = require('express');
const router = express.Router();


router.get('/accounts', async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.json({data : accounts});
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;