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

        let moodsExist;
        if (foods.length > 0) {
            moodsExist = true;
        } else {
            moodsExist = user.moods.size > 0;
        }

        user.moods.set(mood, foods);
        user.save().then(() => res.json({moodsExist}));
    }
)



module.exports = router;