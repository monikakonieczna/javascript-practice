/**
 * The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 */

const isBelowLimit = (input) => input < 40;
const array = [21, 22, 23];
console.log(
  "Every element in the array is smaller than 40: " + array.every(isBelowLimit)
);
