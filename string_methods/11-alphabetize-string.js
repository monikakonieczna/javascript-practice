/**
 * Task 11:
 *
 * Write a JavaScript function to alphabetize a given string.
 * Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
 */

console.log("-----Solution A-----");

let MAX_CHAR = 26;

function sortString(str) {
  let MAX_CHAR = 26;
  let charCount = new Array(MAX_CHAR);
  charCount.fill(0);

  for (let i = 0; i < str.length; i++) {
    charCount[str[i].charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < MAX_CHAR; i++) {
    for (let j = 0; j < charCount[i]; j++) {
      console.log(String.fromCharCode("a".charCodeAt() + i));
    }
  }
}

sortString("Monika Konieczna");
