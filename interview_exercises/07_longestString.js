/**
 * Write a function that takes an array of strings and returns the strings that have a length equal to the longest length.
 */

function longestString(strings) {
  const maxLength = strings.reduce(
    (maxLength, string) => Math.max(maxLength, string.length),
    0
  );

  return strings.filter((string) => string.length == maxLength);
}

const strings = ["monika", "ania", "kasia", "marek", "katarzyna", "aleksander"];
console.log(longestString(strings));
