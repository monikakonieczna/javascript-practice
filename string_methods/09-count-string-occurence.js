/**
 * Task 9:
 *
 * Write a JavaScript function to count the occurrence of a substring in a string.
 */

console.log("-----Solution A-----");
console.log("-----Use indexOf or .search function of JavaScript-----");
function countOccurenceOfSpecificWordInString(substring, inputString) {
  let next = 0;
  let findedWord = 0;
  do {
    var n = inputString.indexOf(substring, next);
    findedWord = findedWord + 1;
    next = n + substring.length;
  } while (n >= 0);
  console.log("Total finded words: ", findedWord - 1);
  return findedWord;
}

countOccurenceOfSpecificWordInString("fake", "fakehgjffakehgyhffake");

console.log("-----Solution B-----");
console.log(
  "-----Use .match function of JavaScript.-----"
);

function countOccurences(string, substring) {
  let matchedWord = 0;
  var regex = new RegExp(substring, "g");
  matchedWord = string.match(regex).length;
  console.log("Total finded matched: ", matchedWord);
  return matchedWord;
}

countOccurences("xdfakefakefaketyfake", "fake");
