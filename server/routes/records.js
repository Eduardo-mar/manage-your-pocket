const Records = require('../models/record');
const express = require('express');
const router = express.Router();


router.get('/records', async (req, res) => {
    try {
        const records = await Records.find({});
        res.json({data : records});
    } catch (error) {
        console.log(error)
    }

});
router.post('/records', async (req, res) => {
    const record = req.body;
    const {_id, ...rest} = record;
    try {
        const records = await Records.findOneAndUpdate(record._id ? {_id: record._id} : {type: 0}, rest, {
            new: true,
            upsert: true});
        res.json({data : records});
    } catch (error) {
        console.log(error)
    }

});
router.post('/records/delete', async (req, res) => {
    console.log(req.body)
    const id = req.body.id;
    try {
        const records = await Records.findOneAndDelete({_id: id});
        res.json({data : records});
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;