/**
 * Task 6:
 * 
 * Write a JavaScript function to concatenates a given string n times (default is 1).
 */

console.log("-----Solution A-----")

function repeat(text, n){
    if(typeof(n) == "undefined" ){
        n = 1;
    }
    return  n < 1 ? '' : new Array(n + 1).join(text);
}

console.log(repeat('A', 3));