/**
 * Create a method named 'includes' which checks an element exists in an array
 */

function includes(arrayToSearch, elementToSearch) {
  for (let element of arrayToSearch) {
    if (element === elementToSearch) {
      return true;
    }
  }
  return false;
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(includes(numberArray, 10));
