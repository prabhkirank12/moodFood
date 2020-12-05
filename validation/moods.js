const Validator = require("validator");
const validText = require("./valid-text");
const {MOODS, FOODS, EXCLUDED_MOODS} = require("../utils/backend-utils");

module.exports = function(data) {
    let errors = {};

    // Validates the mood, merges the errors into our errors object
    Object.assign(errors, validateMood(data.mood).errors);
    Object.assign(errors, validateFoods(data.foods).errors);

    // Returns the errors and a boolean indication if any errors exist
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateMood(mood) {
    let errors = {};
    // Sets mood to an empty string if it's not a valid text
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
    
    // Sets food to an empty string if it's not a valid text
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

    // Ensures foods is an array then validates each food element
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