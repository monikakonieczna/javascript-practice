/**
 * Given two arrays, return an array of their common elements.
 */
function findCommon(a1, a2) {
    const set1 = new Set(a1);
    const set2 = new Set(a2);
    return [...set1].filter(item => set2.has(item))
}

// Tests
console.log(findCommon([1, 2, 3], [3, 4, 5, 1]));