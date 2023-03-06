/**
 * Write a function round100 that rounds a number to the nearest hundred.
 */
function round100(num) {
  return Math.round(num / 100) * 100;
}

/**
 * Write a function dice that returns like a dice a random number between 1 and 6.
 */
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Write a function add that takes a string with a summation task and returns its result as a number.
 * Two natural numbers should be added. The summation task is a string of the form '102+17'.
 */

function add(str) {
  const index1 = str.indexOf("+");
  let str1 = str.substring(0, index1);
  let str2 = str.substring(index1 + 1, str.length);
  return parseInt(str1) + parseInt(str2);
}

/**
 * Write a function unequal that checks 3 values for strict inequality.
 * The function should return true if all three parameters are strict unequal. Otherwise false.
 */

function unequal(a, b, c) {
  return a !== b && a !== c && b !== c;
}
