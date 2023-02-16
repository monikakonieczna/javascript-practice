/**
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 */

const array = [1, 4, 9, 16];
console.log("Original array: " + array);
const map = array.map((x) => x * 2);
console.log("Numbers multiplied by 2: " + map);

/**
 * Task 02 A:
 * Based on given array arrayA =["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"],
 * create an new array just with first names from the original array.
 */
console.log("-----Task A-----");
const arrayA = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];
let outputA = arrayA.map((person) => {
  return person.substring(0, person.indexOf(" "));
});
console.log("Array with firstnames only: " + outputA);
