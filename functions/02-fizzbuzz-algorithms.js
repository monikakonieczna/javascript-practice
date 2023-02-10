/**
 * Write a function which checks given input/parameter:
 * If input/parameter is divisible by 3 print => Fizz
 * If input/parameter is divisible by 5 print => Buzz
 * If input/parameter is divisible by 3 or 5 print => FizzBuzz
 * If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
 * If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' 
 */


function isFizzBuzz(arg){
    if(typeof arg !== 'number'){
        return ('Nan - Not a Number! Please Input Number');
    }
 
    if((arg % 3 === 0) && (arg%5 === 0)) {
        return 'FizzBuzz';
    }

    if(arg%3 === 0){
        return 'Fizz';
    }

    if(arg%5 === 0){
        return 'Buzz';
    }

    else{
        return 'Number is not divisible by 3 or 5 print: ' + arg;
    }
}

let test1 = isFizzBuzz('one');
console.log(test1);
let test2 = isFizzBuzz(false);
console.log(test2);
let test3 = isFizzBuzz(5);
console.log(test3);
let test4 = isFizzBuzz(15);
console.log(test4);
let test5 = isFizzBuzz(7);
console.log(test5);
let test6 = isFizzBuzz(3);
console.log(test6);


