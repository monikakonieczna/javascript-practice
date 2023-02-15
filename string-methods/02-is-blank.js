/**
 * Task 2:
 * 
 * Write a JavaScript function to check whether a string is blank or not.
 */

console.log("-----Solution A-----")
function isBlank(text){
    if(text.trim() === ''){
        console.log("String is empty");
    }
    else{
        console.log("String is not empty");
    }
}

//Test
isBlank("Test1");
isBlank("   ");