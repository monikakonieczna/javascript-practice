/**
 * Task 4:
 *
 * Write a JavaScript function to extract numbers from a string.
 */

console.log("-----Solution A-----");

function extractNumberFromString(text) {
  let str = text;
  let num = str.match(/\d/g);
  num = num.join("");
  console.log(num);
}
extractNumberFromString("124hgj56jn");
