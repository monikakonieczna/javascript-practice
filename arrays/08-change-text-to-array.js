/**
 * The spread (...) syntax allows an iterable, such as an array or string,
 * to be expanded in places where zero or more arguments (for function calls)
 * or elements (for array literals) are expected.
 */

const word = "javascript";
const array = [...word];
console.log("Text " + word + " changed into array: " + array);

/**
 * Task 08 A:
 *  Divide text based on a division character - whitespace.
 */
console.log("-----Task A-----");
const textA = "Good Morning";
const arrayA = textA.split(" ");
console.log("Input word " + textA + " divided based on whitespace: " + arrayA);
