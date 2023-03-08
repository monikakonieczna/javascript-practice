/**
 * JavaScript Map Method for Arrays new array
 */
const arr = ["Laura", false, 454, "Test"];

console.log(arr);

const arr1 = arr.map((item, index, array) => {
  const temp = `${index} ${item}`;
  return temp;
});
console.log(arr1);

const arr3 = [3, 54, 62, 123, 1234];
const arr4 = arr3.map((val) => val * 2);
console.log(arr3);
console.log(arr4);

const arr5 = [
  { first: "Monika", last: "Svekis" },
  { first: "John", last: "Smith" },
  { first: "Sam", last: "Jones" },
];
console.log(arr5);
const arr6 = arr5.map(({ first, last }) => {
  return { fulname: `${first} ${last}` };
});

console.log(arr6);

const arr7 = arr5.map(({ first, last }) => ({ full: `${first} ${last}` }));

console.log(arr7);
