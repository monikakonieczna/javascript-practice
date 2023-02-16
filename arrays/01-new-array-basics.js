//Create empty array
const emptyArray = [];

//Create array with numbers
const numberArray = [1, 2, 3, 4, 5];

//Create array with strings
const stringArray = ["chomik", "cykada", "cielak"];

//Create an array using constructor
const array = new Array(10);
const array2 = new Array(
  "Monday",
  "Tuesday",
  "Wednesday",
  "Friday",
  "Saturday",
  "Sunday"
);

//Get last element in the array ant print it
console.log("Last element in the array: " + array2.at(-1));

//Print in the console length of the array
console.log("Array has " + array2.length + " elements.");

//Add "Thursday" in the end of the array
array2.push("Thusday");
console.log(
  "I added 1 element to the array. Array has now " +
    array2.length +
    " elements."
);

//Check whether array is an array or not
console.log("Array is an array: " + Array.isArray(array));

/**
 * Task 01 A:
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. Print array in the console.
 */
console.log("-----Task A-----");
const arrayA = [5, 12, 17, 23, 123, 45, 54];
console.log("Numbers from an array: " + arrayA);

/**
 * Task 01 B:
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. Print it. Separate the data with cutters.
 */
console.log("-----Task B-----");
const arrayB = [5, 12, 17, 23, 123, 45, 54];
let outputB = "";
for (let i = 0; i < arrayB.length; i++) {
  outputB += arrayB[i] + ", ";
}
console.log("Numbers from an array: " + outputB);

/**
 * Task 01 C:
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. Print the array using a for-of loop.
 */
console.log("-----Task C-----");
const arrayC = [5, 12, 17, 23, 123, 45, 54];
let outputC = "";
for (element of arrayC) {
  outputC += element + ", ";
}
console.log("Numbers from an array: " + outputC);

/**
 * Task 01 D:
 * Define a simple array that will contain names: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. Print element, indeks and array using a for-each loop.
 */
console.log("-----Task D-----");
const arrayD = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];
arrayD.forEach(function (element, indeks, tablica) {
  console.log(element.toUpperCase());
  console.log(indeks);
  console.log(tablica);
});

/**
 * Task 01 E:
 * Check if "people" is an array. If yes print: "People is an array". If not - "People is not an array".
 */
console.log("-----Task E-----");
const people = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];
Array.isArray(people)
  ? console.log("People is an array")
  : console.log("People is not an array");
