/**
 * Task 3:
 *
 * Write a JavaScript function to split a string and convert it into an array of words.
 */

console.log("-----Solution A-----");

function convertStringToArray(input) {
  return input.trim().split(" ");
}

console.log(convertStringToArray("Javascript practice"));
