const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateMoods = require("../../validation/moods");
const {
    getAssignedUserFoods,
    HANGRY,
    ADVENTUROUS,
    MOODS,
    FOODS
} = require("../../utils/backend-utils");

// Route for posting a new mood/foods combination
router.post("/new",
    // Ensures user is logged in
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        // Validates the mood/foods combination
        const { errors, isValid } = validateMoods(req.body);
        if (!isValid) {
            console.log(errors);
            return res.status(400).json(errors);
        }

        // Extract from the request the needed variables
        const user = req.user;
        const mood = req.body.mood;
        const foods = req.body.foods;

        // Checks to make sure the user has some foods selected so frontend
        // knows whether the quiz is still needed
        const moodsExist = getAssignedUserFoods(user).length > 0;
        
        // Updates the mood map in the database and saves it then sends back
        // the response
        user.moods.set(mood, foods); // can't do user.moods[mood] = foods;
        // because of restrictions on Map objects
        user.save().then(() => res.json({moodsExist}));
    }
)



module.exports = {moods: router, MOODS: MOODS, FOODS, HANGRY, ADVENTUROUS};