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
    "Desserts",
    "Thai",
    "Fast Food",
    "Seafood",
    "Vegetarian",
]

export default data => {
    let errors = {};

    Object.assign(errors, validateMood(data.mood).errors);
    Object.assign(errors, validateFoods(data.foods));

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateMood(mood) {
    let errors = {};

    mood = validText(mood) ? mood : "";

    if (!Validator.isIn(MOODS)) {
        errors.mood = `${mood} is an invalid mood`;
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

function validateFood(food) {

    let errors = {};
    
    mood = validText(mood) ? mood : "";
    
    if (!Validator.isIn(MOODS)) {
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