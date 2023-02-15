/**
 * The slice() method returns a shallow copy of a portion of an array into a new array object selected 
 * from start to end (end not included) where start and end represent the index of items in that array. 
 * The original array will not be modified.
 */

const array=["agama","albatros","alpaka","amur","amstaf"];
console.log(array.slice(-2));//from the end

/**
 * Task 13 A:
 * Use an array: animals=["agama","albatros","alpaka","amur","amstaf"]. 
 * Cut out the portion of the board that will contain the first two elements. View the cut elements. Display the array after the cut operation.
 */
console.log("-----Task A-----")
const animals=["agama","albatros","alpaka","amur","amstaf"];
console.log("Array before slice() operation: " + pPrint(animals));
console.log("Sliced elements: " + animals.slice(0,2));
console.log("Array after slice() operation: " + pPrint(animals) + ". As you can see, it didn't change the original array.")

//utility 
function pPrint(input){
    let output = '';
    if(input.length >=1){
        output+=input[0];
    }
    for(let i=1; i<input.length; i++){
        output+= ', ' + input[i];
    }
    return output;
}
