/**
 * Write a function which show or print Prime Number upto provided range.
 */

function showPrimeNumber(nLimit) {
  for (let num = 2; num <= nLimit; num++) {
    if (isPrimeNumber(num)) {
      console.log("Prime Number: " + num);
    }
  }
}

function isPrimeNumber(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimeNumber(20);
