/**
 * Task 13:
 *
 * Write a JavaScript program to find the most frequent character in a given string except for space.
 */

console.log("-----Solution A-----");
let ASCII_SIZE = 256;

function getMaxOcurringCharacter(str1) {
  //Array to keep the count of individual characters
  let str = str1.replace(/\s/g, "");
  let count = new Array(ASCII_SIZE);
  for (let i = 0; i < ASCII_SIZE; i++) {
    count[i] = 0;
  }

  let len = str.length;
  for (let i = 0; i < len; i++) {
    count[str[i].charCodeAt(0)] += 1;
  }
  let max = -1;
  let result = " ";

  for (let i = 0; i < len; i++) {
    if (max < count[str[i].charCodeAt(0)]) {
      max = count[str[i].charCodeAt(0)];
      result = str[i];
    }
  }
  return result;
}

let character = getMaxOcurringCharacter(
  "It does not do to dwell on dreams and forget to live"
);
console.log("The most frequent character in a given string is: ", character);
