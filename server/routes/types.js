const Type = require('../models/type');
const express = require('express');
const router = express.Router();


router.get('/types', async (req, res) => {
    try {
        const types = await Type.find({});
        res.json({data : types});
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;