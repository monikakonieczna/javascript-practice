/**
 * 
 * Character Frequency Counter
 * Write a function that takes a string as input and counts the frequency of each character in the string. 
 * The function should return a string where each character is followed by its count, and the counts are case-insensitive.
 */
function count(str) {
    let counter = {};
    let word = str.toLowerCase();
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let char = word.at(i);
        if (counter[char]) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }

    for (let key in counter) {
        result += key + counter[key];
    }
    return result;
}

console.log(count("ajbhbfjhBSAhhhhhdsklmlk"));