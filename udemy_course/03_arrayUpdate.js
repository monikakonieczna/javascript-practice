/**
 * Array Updating adding and removing array items
 */

const arr = ["First", "Second"];
//Add element in the end of array
arr.push("End Push");
//Delete first element in the array
const val1 = arr.shift();
//Delete last element in the array
const val2 = arr.pop();
//Add new item in the beginning of the array
arr.unshift("Start added value");
console.log(val1);
console.log(val2);
console.log(arr);

const string = arr.toString();
console.log(string);

const string2 = arr.join("-");
console.log(string2);
