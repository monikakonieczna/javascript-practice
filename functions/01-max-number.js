/**
 * Write a function which returns the maximum of two number
 */

//ternary operator
function findMaxNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

let test1 = findMaxNumber(5, 10);
let test2 = findMaxNumber(100, 5400);
let test3 = findMaxNumber(900, 1800);

console.log("Max number: ", test1);
console.log("Max number: ", test2);
console.log("Max number: ", test3);
