/**
 * Write a function which checks and count the truthy values from an array.
 * Falsy values in JavaScript are:
 * false
 * 0 (zero)
 * undefined
 * null
 * ''
 * NaN
 */


const array = [0, 1, undefined, false, true, ''];

function countTruthyValues(argArray){
    let truthyCount = 0;

    for(let arg of argArray){
        if(arg) {
            truthyCount ++;        
        }
    }
    return truthyCount;
}

let test = countTruthyValues(array);
console.log(test);