// food.js is a new module
// "I'm in the food.js fike"
// "I'm in the food.js module"


// create a variable
let food = [
    'Chili and rice',
    'ramen',
    'fried chicken',
    'steak'
]

let myfavoriteNumber = 567.61;

// Export the food array to app.js
// Module.exports = food;

module.exports = food;

module.exports = {
    food: food,
    favoriteNumber: myfavoriteNumber
}