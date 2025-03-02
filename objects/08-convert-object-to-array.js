/**
 * Write a function that converts an object into an array of [key, value] pairs.
 */
function convertToArray(obj) {
    return Object.entries(obj);
}


// Tests
console.log(convertToArray({name: "monika", age: 30}));