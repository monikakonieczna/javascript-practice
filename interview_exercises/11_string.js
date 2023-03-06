/**
 * Given a string, reverse each word in the sentence
 */

var string = "Welcome to JavaScript World!";

var reverseEntireSentence = reverseBySeparator(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseEntireSentence);
console.log(reverseEachWord);

/**
 * Write a function that takes an array of integers and returns the sum of all elements
 */

function sum(arr) {
  let sum = 0;
  for (element in arr) {
    sum += arr[element];
  }
  console.log("Sum of elements n the array is equal to: " + sum);
}

array = [1, 2, 3, 4];

sum(array);

/**
 * Check if an array contains perticular number
 */

let array2 = [1, 2, 3, 4, 5];

function contains(array, number) {
  let result = false;
  for (element in array) {
    if (array[element] === number) {
      result = true;
    }
  }
  return result;
}

console.log("Given array contains given number: ", contains(array2, 7));

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
 */

function twoSum(a, target) {
  let storage = {};
  let nums = [];

  for (let i in a) {
    let diff = target - a[i];

    if (diff in storage) {
      nums.push([diff, a[i]]);
    }
    storage[a[i]] = i;
  }
  console.log(nums);
  console.log(storage);
  return nums;
}

let array6 = [2, 3, 4, 3, 6, 7];
twoSum(array6, 6);
 
/**
 * FizzBuzz
 

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
*/
