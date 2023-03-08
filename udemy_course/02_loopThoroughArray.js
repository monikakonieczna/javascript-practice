/**
 * How to loop thorough an array
 */

const arr = ["James", "John", "Robert", "Michael", "Monika"];

/**
 * For loop
 */
console.log("****FOR LOOP****");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**
 * While loop
 */
console.log("****WHILE LOOP****");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

/**
 *For Each Loop
 */
console.log("****FOR EACH LOOP****");
arr.forEach((item, index, array) => {
  console.log(item);
});

/**
 * Map function -  creating new array
 */
console.log("****MAP FUNCTION****");
const arr1 = arr.map((item, index) => {
  console.log(item);
  return `${index} ${item}`;
});
console.log(arr1);

/**
 * Filter function - creating new array
 */
console.log("****FILTER FUNCTION****");
const arr2 = arr.filter(String);
console.log(arr2);
