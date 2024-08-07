const express = require('express');
const housesRouter = express.Router();
const House = require('../models/house.js');

// housesRouter.get('/', (req, res) => {
//     res.send('hello from the houses api');
// });

housesRouter.get('/', async (req, res) => {
    try {
        const housesWithCrests = await House.find({crest: {$exists: true, $ne: ""}});
        res.send(housesWithCrests)
    } catch (error) {
        res.status(500).send(error);
    }
})

housesRouter.post('/', async (req, res, next) => {
    try {
        const newHouse = new House(req.body);
        await newHouse.save();
        res.status(201).send(newHouse);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = housesRouter;