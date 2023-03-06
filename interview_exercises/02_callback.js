/**
 * Explain what a callback function is and provide a simple example
 */

function modifyArr(arr, callback) {
  arr.push(100);

  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArr(arr, function () {
  console.log("Array has been modified", arr);
});
