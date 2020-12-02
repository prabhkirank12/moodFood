const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require("axios");
const apiKey = require('../../config/keys').googleAPIKey;

router.get("/",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const food = req.query.food.replace(" ", "%20");
        const location = req.query.location;
        const radius = req.query.radius;
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${food}&location=${location}&type=restaurant&radius=${radius}&key=${apiKey}`)
            .then(resp => res.json(resp.data))
            .catch(err => console.log(err))
    }
)



module.exports = router;