const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require("axios");
const keys = require('../../config/keys');
const mkeys = require("../../config/keys");

router.get("/restaurant",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const mood = req.query.mood;
        const foods = req.user.moods.get(mood);
        const food = foods[Math.floor(Math.random() * foods.length)].replace(" ", "%20");
        const location = req.query.location;
        const radius = req.query.radius;
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${food}&location=${location}&type=restaurant&radius=${radius}&key=${keys.googleAPIKey}`)
            .then(resp => {
                const results = resp.data.results;
                const result = results[Math.floor(Math.random() * results.length)];
                res.json(result);
            })
            .catch(err => console.log(err))
    }
)

router.get("/map-key",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        res.json(keys.mapsAPIKey)
    }
)



module.exports = router;