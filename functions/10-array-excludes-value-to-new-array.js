/**
 * Create a method named 'excludes' which cut/excludes values from existing array and push to new array
 */

function excludes(arrayToExclude, elementsToExclude){

    const outputArray = [];
    for(let element of arrayToExclude){
        if(!elementsToExclude.includes(element)){
            outputArray.push(element);
        }
    }
    return outputArray;
}


const oldArray = [1, 2, 3, 4, 5, 6];
const newArray = (excludes(oldArray, [2,3]));
console.log(newArray);