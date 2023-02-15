/**
 * The join() method creates and returns a new string by concatenating all of the elements in an array,
 * separated by commas or a specified separator string.
 */

const array = ["Poland", "Italy", "France"];
console.log(array.join());
console.log(array.join( " - "));
console.log(array.join(" <--> "));

/**
 * Task 07 A:
 * Count the number of letters in the array.
 */
console.log("-----Task A-----")
const arrayA = ["Poland", "Italy", "France"];
let letters = arrayA.join("").length;
console.log("There is "+ letters + " letters in the array.")