/**
 * Task 7:
 *
 * Write a JavaScript function to insert a string within a string at a particular position (default is 1).
 */

console.log("-----Solution A-----");

function insertString(string, insert, position) {
  if (typeof position == "undefined") {
    position = 0;
  }
  if (typeof insert == "undefined") {
    insert = "";
  }
  return string.slice(0, position) + insert + string.slice(position);
}

console.log(insertString("Monday, Wednesday", "Tuesday, ", 8));
