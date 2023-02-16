/**
 * Write a function which show or print Sum of Arguments passed as an Array
 */

function sumOfArguments(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
    console.log("Current items to add: ", items);
    return items.reduce((n1, n2) => n1 + n2);
  }
}

console.log("Sum:", sumOfArguments([10, 2, 8, 77, 6]));
