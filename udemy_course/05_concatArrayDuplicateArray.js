/**
 * How to concat arrays and duplicate an array
 */

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 0];

const arr3 = arr1.concat(arr2);

console.log(arr3);

const arr4 = arr1.concat(arr2, arr2);
console.log(arr4);

//duplicate an array
const arr5 = arr1.concat();
