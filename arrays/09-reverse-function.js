/**
 * The reverse() method reverses an array in place and returns the reference to the same array,
 * the first array element now becoming the last, and the last array element becoming the first.
 */

const text = "kayak";
const array = [...text];
console.log(
  "Word " +
    text +
    " is a palindrome: " +
    (array.reverse().join("") === array.join(""))
);

/**
 * Task 09 A:
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. Print to the console.
 * Revers the content and print it again.
 */
console.log("-----Task A-----");
const arrayA = [1, 45, 65];
console.log("Original array: " + arrayA);
arrayA.reverse();
console.log("Reveresed array: " + arrayA);

/**
 * Task 09 B:
 * Define a simple array that will contain names: "Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski". Print to the console.
 * Revers the content and print it again.
 */
console.log("-----Task B-----");
const arrayB = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];
console.log("Original array: " + arrayB);
console.log("Reversed array: " + arrayB.reverse());
