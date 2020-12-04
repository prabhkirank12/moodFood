const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateMoods = require("../../validation/moods");

const HANGRY = "Hangry";
const ADVENTUROUS = "Adventurous";

const MOODS = [
    "Happy", 
    "Stressed", 
    "Sad",
    "Overwhelmed",
    HANGRY,
    ADVENTUROUS,
];

const FOODS = [
    "Italian",
    "Mexican",
    "Pizza",
    "Japanese",
    "Indian",
    "Chinese",
    "American",
    "Dessert",
    "Thai",
    "Fast Food",
    "Seafood",
    "Vegetarian",
];

router.post("/new",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateMoods(req.body);
        
        if (!isValid) {
            console.log(errors);
            return res.status(400).json(errors);
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



module.exports = {moods: router, MOODS: MOODS, FOODS, HANGRY, ADVENTUROUS};