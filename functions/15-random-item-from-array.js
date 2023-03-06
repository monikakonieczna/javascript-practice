/**
 * Write a function to get random item from an array.
 */

function getRandomItem(arr) {
  let array = arr;
  let randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

console.log("Random item: " + getRandomItem(planets));
