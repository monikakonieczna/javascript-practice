/**
 * Given a string, return a Map where keys are characters, and values are their count.
 */
function countChars(str) {
    const charMap = new Map();

    for (let char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else charMap.set(char, 1);
    }

    return charMap;
}

// Test
const result = countChars("hello world");
console.log(result);
console.log(Array.from(result))