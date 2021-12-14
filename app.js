console.log('Hello from app.js')

let people = [
    'Edan',
    'Sabrina',
    'Subash',
    'Ken'
];

for (let person of people) {
    console.log(`Hell ${person}!`);
    if ( person === 'Edan') {
        console.log('Looking good!');

    }
    
}

// Import function 
// let food = require(./food)  food is the food.js

let food = require('./food');
console.log('got some food', food);

let data = require('./food')
let counter = require('./counter') // calling out the counter.js file/module

console.log('food is', data.food);
console.log('favorite number', data.favoriteNumber);
console.log('counter', counter());
console.log('counter', counter());
console.log('counter', counter());
