/**
 * Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.
 * The function should take two arguments: the first argument being the string to search, and
 * the second a substring to be searched for.
 * It should return an integer count.
 * The matching should yield the highest number of non-overlapping matches.
 * In general, this essentially means matching from left-to-right or right-to-left.
 */

function countSubstring(str, subStr) {
  let count = (str.length - str.replaceAll(subStr, "").length) / subStr.length;
  return count;
}

console.log(countSubstring("mama", "ma"));
