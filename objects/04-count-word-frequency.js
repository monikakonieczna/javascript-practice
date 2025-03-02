/**
 * Write a function that takes a string 
 * and returns an object where keys are words, 
 * and values are the number of times they appear.
 */
function countWordFrequency(str) {
    let frequency = {};
    let arr = [];
    arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (frequency[key]) {
            frequency[key] += 1;
        } else {
            frequency[key] = 1;
        }
    }

    return frequency;
}

console.log(countWordFrequency("monika ma kota monika ma psa"))