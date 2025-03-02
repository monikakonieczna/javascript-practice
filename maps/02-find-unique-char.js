/**
 * Given a string, find the first character that appears only once.
 */
function findFirstUnique(string) {
    const charMap = new Map();

    for (let char of string) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else charMap.set(char, 1);
    }

    for (let [key, value] of charMap) {
        if (value === 1) {
            return [key, value];
        }
    }

    return null;
}

const result = findFirstUnique("mamakot");
console.log(result)