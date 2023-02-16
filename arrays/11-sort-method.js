/**
 * The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending.
 */

const array = ["Kiwi", "Kea", "Skink", "Tuatara"];
array.sort();
console.log("Sorted array: " + array);

/**
 * Task 11 A:
 * Sort an array with numbers.
 */
console.log("-----Task A-----");

function compareNumbers(a, b) {
  return a - b;
}

const arrayA = [8, 20, 56, 67, 3, 2];
const sortedArrayA = arrayA.sort(compareNumbers);
console.log("Sorted array: " + sortedArrayA);
