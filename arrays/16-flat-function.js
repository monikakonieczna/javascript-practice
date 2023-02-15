/**
 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

const array = [
    1,
    [2,3],
    [4,5, [6,7]],
    [[[8,9], [10,11]]]
]

console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(Infinity));