/**
 * The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 */

const array1 = ["Poland", "Germany", "Slovakia"];
const array2 = ["France", "England", "Scotland"];
const array3 = ["Norway", "Sweden"];

const result = array1.concat(array2);
console.log("Array 1 united with array 2: " + result);

const result2 = array1.concat(array2, array3);
console.log("3 arrays united: " + result2);

//You can use spread syntax
const result3 = [...array1, ...array2, ...array3];
console.log("3 arrays united using spread syntax: " + result2);