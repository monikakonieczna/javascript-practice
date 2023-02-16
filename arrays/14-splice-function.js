/**
 * The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 */

/**
 * Task 14 A:
 * Use an array: animals2 = [baran, biedronka, bizon, boa, bocian].
 * Remove from the data: "bison", add 2 elements: "bielik","beagle".
 * Print the deleted item and array after making changes.
 */
console.log("-----Task A-----");
const animals2 = ["baran", "biedronka", "bizon", "boa", "bocian"];
console.log("Array before changes: " + pPrint(animals2));
let rValue = animals2.splice(2, 1, "bielik", "beagle");
console.log("Deleted items: " + rValue);
console.log("Array after changes: " + pPrint(animals2));

//utility
function pPrint(input) {
  let output = "";
  if (input.length >= 1) {
    output += input[0];
  }
  for (let i = 1; i < input.length; i++) {
    output += ", " + input[i];
  }
  return output;
}
