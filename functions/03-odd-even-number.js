/**
 * Write a function which checks number till given input/parameter is odd or even
 */

function isOddEvenNumber(argLimit) {
  for (let i = 0; i <= argLimit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

isOddEvenNumber(10);
