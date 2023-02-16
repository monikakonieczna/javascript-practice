/**
 * Task 1:
 *
 * Write a JavaScript function to check whether an `input` is a string or not.
 */
console.log("-----Solution A-----");
function isString(input) {
  return Object.prototype.toString.call(input) === "[object String]";
}

const exampleA = "Monika";

if (isString(exampleA)) {
  console.log("Variable is a string.");
} else {
  console.log("Variable is not a string.");
}
