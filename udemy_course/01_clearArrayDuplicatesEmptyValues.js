/**
 * Clear Array of Duplicates and empty values
 */

const arr = [
  "James",
  "James",
  "John",
  "Robert",
  "Michael",
  "Monika",
  "Monika",
  0,
  "Sam",
  "",
  ,
  ,
  ,
  "Monika",
];
console.log(arr);
const result = [...new Set(arr.filter(Boolean))];
console.log(result);
