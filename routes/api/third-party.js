const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require("axios");
const keys = require('../../config/keys');
const {HANGRY, ADVENTUROUS, FOODS} = require("./moods");

router.get("/restaurant",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const mood = req.query.mood;
        const location = req.query.location;
        const radius = req.query.radius;
        let food;
        if (mood === HANGRY) {
            axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&type=restaurant&rankby=distance&key=${keys.googleAPIKey}`)
              .then(resp => {
                const result = resp.data.results[0];
                res.json(Object.assign({}, result, {type: "Nearby"}));
            })
              .catch(err => console.log(err));
        } else if (mood === ADVENTUROUS) {
            const user = req.user;
            const assignedFoodsIter = user.moods.values();
            let assignedFoodsArr = [];
            for (const foods of assignedFoodsIter) {
                assignedFoodsArr = assignedFoodsArr.concat(foods);
            }
            console.log(assignedFoodsArr);
            let unassignedFoods = FOODS.filter(food => !assignedFoodsArr.includes(food));
            if (unassignedFoods.length === 0) unassignedFoods = assignedFoodsArr;
            food = unassignedFoods[Math.floor(Math.random() * unassignedFoods.length)].replace(" ", "%20");
            axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${food}&location=${location}&type=restaurant&radius=${radius}&key=${keys.googleAPIKey}`)
            .then(resp => {
                const results = resp.data.results;
                const result = results[Math.floor(Math.random() * results.length)];
                res.json(Object.assign({},result,{type: food}));
            })
            .catch(err => console.log(err))
        } else {
            const foods = req.user.moods.get(mood);
            food = foods[Math.floor(Math.random() * foods.length)].replace(" ", "%20");
            
            axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${food}&location=${location}&type=restaurant&radius=${radius}&key=${keys.googleAPIKey}`)
                .then(resp => {
                    const results = resp.data.results;
                    const result = results[Math.floor(Math.random() * results.length)];
                    res.json(Object.assign({},result,{type: food}));
                })
                .catch(err => console.log(err))
        }
    }
)

router.get("/map-key",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        res.json(keys.mapsAPIKey)
    }
)



module.exports = router;