const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

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