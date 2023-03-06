/**
 * Task 5:
 *
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 */

console.log("-----Solution A-----");

function capitalizeEveryFirstLetter(input) {
  const temp = input.split(" ");

  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
  }

  return temp.join(" ");
}
//test
const text =
  "Climate change has turned this summer into a catalogue of catastrophes.";
console.log("Given word: " + text);
console.log(
  "Sptring with capitalized every first letter: " +
    capitalizeEveryFirstLetter(text)
);
