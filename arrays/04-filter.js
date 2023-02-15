/**
 * The filter() method creates a shallow copy of a portion of a given array, 
 * filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const words = ["draconian", "honorable", "delectable", "adept", "distinctive", "tireless", "mindless"];
const results = words.filter(word => word.length > 8);
console.log(results);

/**
 * Task 04 A:
 * Filter out all values smaller than 10
 */
console.log("-----Task A-----")
const arrayA = [1, 2, 6, 78, 65, 45, 34, 56];

function isBigEnough(value){
    return value >= 10 ;
}

const resultA = arrayA.filter(isBigEnough);
console.log("Original array: "+ arrayA);
console.log("Array after filtering process: " + resultA);


/**
 * Task 04 B:
 * Print all prime numbers from an array.
 */
console.log("-----Task B-----")

function isPrime(num){
    for(let i = 2; num > i; i++){
        if(num % i === 0){
            return false;
        }
    }
    
    return num > 1;
}

const arrayB = [-3, -33, 0, 1, 13, 2, 4, 6];

console.log("Prime numbers from an array: " + arrayB.filter(isPrime));

/**
 * Task 04 C:
 * Write an function which will search for a content in array based on search criteria
 */
console.log("-----Task C-----")

const fruits = ["apple", "apricot", "banana", "grape", "cherry", "mango", "lime", "lemon" ];

function filterItems(array, query){
    return array.filter((x) => x.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap"));
console.log(filterItems(fruits, "an"));