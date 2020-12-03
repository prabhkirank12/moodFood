const Validator = require("validator");
const validText = require("./valid-text");

const MOODS = [
    "Happy", 
    "Stressed", 
    "Sad",
    "Overwhelmed",
    "Hangry",
    "Adventurous",
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
]

module.exports = function(data) {
    let errors = {};

    Object.assign(errors, validateMood(data.mood).errors);
    Object.assign(errors, validateFoods(data.foods).errors);

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateMood(mood) {
    let errors = {};
    console.log(mood);

    mood = validText(mood) ? mood : "";

    if (!Validator.isIn(mood, MOODS)) {
        errors.mood = `${mood} is an invalid mood`;
    }

    if (Validator.isEmpty(mood)) {
        errors.mood = "Mood field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateFood(food) {

    let errors = {};
    
    food = validText(food) ? food : "";
    
    if (!Validator.isIn(food, FOODS)) {
        errors.foods = `${food} is an invalid food option`;
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateFoods(foods) {
    let errors = {};

    if (Array.isArray(foods)) {
        foods.forEach(food => {

            const validation = validateFood(food);

            if (!validation.isValid) {
                errors = validation.errors
            }

        })
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}