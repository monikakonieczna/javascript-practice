/**
 * Given an array, return a new array without duplicates.
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Tests
console.log(removeDuplicates([1,2,3,2,2,1,2,3,7,8]));