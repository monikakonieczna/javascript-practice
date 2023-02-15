/**
 * push() method insert one or more elements and returns array's length
 * pop() takes last element from an array and returns it 
 */

const array = ["java", "javascript", "python"];
console.log("Origin array: " + array);
//Add two elements to the array
array.push("go", "c#");
console.log("Array after adding 2 elements: " + array);
//delete last element in the table, print it and table after this operation
const deletedElement = array.pop();
console.log("Array after element deletion: " + array + "\n" + "Deleted element: " + deletedElement);


/**
 * Task 05 A:
 * 
 * Define a simple array that will contain the numbers: 5,12,17,23,123,45,54. 
 * Print it in the console. Add 201 and 1 to the array. Again, print the array in the console.
 */
console.log("-----Task A-----")
const input = [5,12,17,23,123,45,54];
console.log("Input - Numbers from an array: " + input);
input.push(201);
input.push(1);
console.log("Output - Numbers from an array: " + input);