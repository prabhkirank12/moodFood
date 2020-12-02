const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateMoods = require("../../validation/moods");

router.post("/new",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateMoods(req.body);
        
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const user = req.user;
        const mood = req.body.mood;
        const foods = req.body.foods;
        user.moods.set(mood, foods);
        user.save().then(user => res.json(user));
    }
)



module.exports = router;