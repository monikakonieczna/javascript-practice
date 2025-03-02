/**
 * Given an array of numbers from 1 to N with some numbers missing, return the missing numbers.
 */
function findMissingElementInSequence(arr, n) {
    const fullSet = new Set([...Array(n).keys()].map(x => x + 1));
    const arrSet = new Set(arr);

    return [...fullSet].filter(x => !arrSet.has(x));
}


console.log(findMissingElementInSequence([1, 2, 4, 6], 6)); 