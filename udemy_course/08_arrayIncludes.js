/**
 * Array include
 * Method and index methods JavaScript coding Example
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 987, "string", "string"];

//check if the value is within the array
const boo1 = arr.includes("string");
console.log(boo1);

const ind1 = arr.indexOf("string");
console.log(ind1);

const ind2 = arr.lastIndexOf("string");
console.log(ind2);

//first result which match requirement
const ind3 = arr.findIndex(call1);
console.log(ind3);

function call1(item) {
  if (item === 5) {
    return item;
  }
}
 