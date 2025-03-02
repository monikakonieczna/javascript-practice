/**
 * Write a function that checks if a string has all unique characters.
 */
function checkUniqueChars(str) {
    const set = new Set(str);
    return set.size === str.length;
}

// Tests
console.log(checkUniqueChars("monika"));
console.log(checkUniqueChars("aga"));