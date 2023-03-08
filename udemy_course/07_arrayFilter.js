/**
 * Array Filter Method Example for JavaScript Arrays
 */

const arr = [
  "dog",
  "Cat",
  "donkey",
  "sheep",
  "Duck",
  "goose",
  "turkey",
  1,
  2,
  3,
  4,
];

arr.push(true);

//Create array where only strings with more than 4 letters will be included
const arr1 = arr.filter((val) => val.length > 4);
console.log(arr1);

const arr2 = arr.filter(checker);

function checker(item, index, array) {
  return index >= 2;
}
//Return only strings from the initial array
const arr3 = arr.filter((item, index) => {
  return typeof item == "string";
});

console.log(arr3);

//Return only numbers from the intial array
const arr4 = arr.filter((item) => {
  return typeof item == "number";
});

console.log(arr4);

//Return only string which are starting with upper case
const arr5 = arr.filter((str) => {
  if (typeof str == "string") {
    const first = str[0].toUpperCase();
    return first === str[0];
  }
});

console.log(arr5);
