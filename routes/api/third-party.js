const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require("axios");
const apiKey = require('../../config/keys').googleAPIKey;

router.get("/",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {

        let food = req.body.food.replace(" ", "%20");
        const location = req.body.location;

        axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${food}&inputtype=textquery&locationbias=circle:1600@${location}&key=${apiKey}`)
            .then(resp => res.json(resp));
    }
)



module.exports = router;