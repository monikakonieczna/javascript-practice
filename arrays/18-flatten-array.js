/**
 * Write a function that flattens a nested array of arbitrary depth.
 */
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArray([1,2,3,4]));
console.log(flattenArray([1,[5,2],3,4]));
console.logJSON.stringify(flattenArray([1,[5,2],3,[67,89,[6,7,8]]]));