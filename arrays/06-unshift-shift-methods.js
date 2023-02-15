/**
 * unshift() method inserts one or more elements at the beginning of the array, and then returns a new array length.
 * shift() removes the first element from the array and returns its value
 */

/**
 * Task 06 A:
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. Write the array to the console. 
 * Add two numbers 7 and 77 to the beginning of the array. Print the length of the array and its current contents to the console.
 */
console.log("-----Task A-----")
const arrayA = [5,12,17,23,123,45,54];
console.log("Numbers from an original array: " + arrayA);
let arrayLength = arrayA.unshift(7,77);
console.log("Numbers from new array: " + arrayA + " Current array has" + arrayLength + " elements.");

/**
 * Task 06 B:
 * Delete the first item from the array. Print the length of the array and its current contents to the console.
 */
console.log("-----Task B-----")
const arrayB = [5,12,17,23,123,45,5,1,1,1];
console.log("Numbers from an original array: " + arrayB);
let deleted = arrayB.shift();
console.log("Numbers from new array: " + arrayB + ". Element: " + deleted + " was deleted.");