/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 */

const array = ["Wafel", "Nora", "Nabi"];
console.log(array.indexOf("Nabi")); //2
console.log(array.indexOf("Puszek")); //-1

/**
 * The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
 */

const array2 = [1, 2, 3, 2, 2, 6, 6];
console.log(array2.lastIndexOf(2)); //4

/**
 * The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 */

const array3 = ["Warsaw", "Wroclaw", "Szczecin"];
if(array3.includes("Bialystok")){
    console.log("Bialystok is included in the array")
} else {
    console.log("Bialystok is not included in the array")
}