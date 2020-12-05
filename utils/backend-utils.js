// Pulls the iterable lists of foods arrays from the user moods 
// map and combines all the food elements into one array

exports.getAssignedUserFoods = user => {

    assignedFoodsIter = user.moods.values();

    let assignedFoodsArr = [];

    for (const foods of assignedFoodsIter) {
        assignedFoodsArr = assignedFoodsArr.concat(foods);
    }

    return assignedFoodsArr;
}

const HANGRY = "Hangry";
const ADVENTUROUS = "Adventurous";
exports.HANGRY = HANGRY;
exports.ADVENTUROUS = ADVENTUROUS;

exports.MOODS = [
    "Happy", 
    "Stressed", 
    "Sad",
    "Overwhelmed",
    HANGRY,
    ADVENTUROUS,
];

exports.FOODS = [
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

exports.EXCLUDED_MOODS = [
    HANGRY,
    ADVENTUROUS,
];