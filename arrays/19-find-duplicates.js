/**
 * Write a Function to Find Duplicates in an Array
 */
function findDuplicates(arr) {
    let count = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    }

    for (let key in count) {
        if (count[key] > 1) {
            result.push(key);
        }
    }
    return result;
}

console.log(findDuplicates([1, 2, 3, 2, 2, 3, 4, 5]))