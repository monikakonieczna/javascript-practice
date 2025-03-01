/**
 * Write a JavaScript function that sorts an array of numbers in ascending order. 
 * After that, create a set of edge case test cases to validate the function's behavior in different scenarios.
 */

export function sortArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    return arr.sort((a, b) => a - b);
}