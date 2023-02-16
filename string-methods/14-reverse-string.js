/**
 * Task 14:
 *
 * Write a JavaScript function to reverse words in a given string.
 */
let example = "It matters not what someone is born, but what they grow to be.";

console.log("-----Solution A-----");
console.log("-----Use built-in function-----");

function reverseString(str) {
  return [...str].reverse().join("");
}

console.log(reverseString(example));

console.log("-----Solution B-----");
console.log("-----Without built-in function reverse()-----");

function reverseGivenString(str) {
  let reversed = "";
  let temp = str.length;

  while (temp > 0) {
    reversed += str.substring(temp - 1, temp);
    temp--;
  }
  return reversed;
}

console.log(reverseGivenString(example));

console.log("-----Solution C-----");
console.log("-----Without any built-in function-----");

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse(example));
