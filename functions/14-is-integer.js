/**
 * Create a function to verify whether input value is an integer.
 */

function isInteger(input) {
  let num = input;
  console.log(`${num} is a number?`, Number.isInteger(num));
}

isInteger("hey");
isInteger(569);
isInteger(4.56);
