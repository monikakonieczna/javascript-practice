/**
 * Write a function mode to find the value that appears most in an array.
 * The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.
 */

function modeValue(arr) {
  const counter = {};
  let result = [];
  let max = 0;

  arr.forEach((el) => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    } else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}

const integers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 2, 3, 4, 5, 5, 5, 5, 7, 6, 7, 6, 7, 6, 7,
  888,
];

console.log(modeValue(integers));
