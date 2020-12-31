const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require("axios");
const keys = require('../../config/keys');
const {getAssignedUserFoods, HANGRY, ADVENTUROUS, FOODS} = require("../../utils/backend-utils");

const sendResponse = (res, result, type) => {
    res.json(Object.assign({}, result, {type}));
}

// Route for fetching a restaurant when the user selecets their mood
router.get("/restaurant",

    // Ensures user is logged in
    passport.authenticate("jwt", {session: false}),
    (req, res) => {

        // Pull the needed data from the request
        const mood = req.query.mood;
        const location = req.query.location;
        const radius = req.query.radius;

        // Declares needed variables
        let result;
        let type;
        let availableFoods;
        let results;

        // Pulls nearest restaurant if the mood is hangry
        if (mood === HANGRY) {
            // Sends a Google Place Search Query with the results ranked by the
            // distance from the current location
            axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&type=restaurant&rankby=distance&key=${keys.googleAPIKey}`)
              .then(resp => {
                // Selects the first result and sends it back
                results = resp.data.results;
                result = results[0];
                type = "Nearby";
                sendResponse(res, result, type)
            })
              .catch(err => res.status(400).json(err));
        } 

        else {
            // Selects a food category the user does not have assigned, or picks a 
            // random food category if all are assigned
            if (mood === ADVENTUROUS) {
                const user = req.user;

                let assignedFoodsArr = getAssignedUserFoods(user);
                

                // Pulls the food groups that the user has not assigned to a 
                // mood
                availableFoods = FOODS.filter(food => (
                    !assignedFoodsArr.includes(food))
                );

                // if no foods are unassigned, sets unassigned foods to all the
                // foods so one can be selected randomly
                if (availableFoods.length === 0) availableFoods = [...assignedFoodsArr];

            } else {
                // Pulls the food types the user likes for their current mood
                availableFoods = [...req.user.moods.get(mood)];
            }
            
            // // Selects a random food type
            // food = availableFoods[
            //     Math.floor(Math.random() * availableFoods.length)
            // ].replace(" ", "%20"); //formats the food type to be used in a URL
            // // since URLs cannot contain spaces

            // shuffles the foods array so they will be iterated through in a
            // random order
            availableFoods.shuffle();
            let i = 0;
            
            // Fetches the restaurasts from google that match the food type
            // and search radius
            const fetchRestaurants = () => {
                // if i is the same as the availableFoods.length, either availableFoods
                // is empty or no restaurants were found in the radius for any
                // of the foods
                if (i === availableFoods.length) {
                    res.status(400).json({foods: "No restaurants found. Consider moving to civilization or increasing your search radius."});
                    return;
                }

                const food = availableFoods[i].replace(" ", "%20"); //formats the food type to be used in a URL
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${food}&location=${location}&type=restaurant&radius=${radius}&key=${keys.googleAPIKey}`)
                    .then(resp => {
                        results = resp.data.results;
                        // Selects a random result and sends it back. If there are
                        // no results, it tries to fetch the restaurants for the next
                        // food type
                        if (results.length) {
                            result = results[Math.floor(Math.random() * results.length)];
                            type = food.replace("%20", " ");
                            sendResponse(res, result, type);
                        } else {
                            i++;
                            fetchRestaurants();
                        }
                    })
                    .catch(err => res.status(400).json(err));
            }

            fetchRestaurants();
        }
    }
)


// Returns the google map API Key
router.get("/map-key",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        res.json(keys.mapsAPIKey)
    }
)



module.exports = router;