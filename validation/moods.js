const Validator = require("validator");
const validText = require("./valid-text");

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

const EXCLUDED_MOODS = [
    HANGRY,
    ADVENTUROUS,
];


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
    mood = validText(mood) ? mood : "";

    if (!Validator.isIn(mood, MOODS)) {
        errors.mood = `${mood} is an invalid mood`;
    }

    if (Validator.isIn(mood, EXCLUDED_MOODS)) {
        errors.mood = `${mood} is not a customizable mood`;
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