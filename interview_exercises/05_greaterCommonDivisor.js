function greatestCommonDivisor(a, b) {
  return b == 0 ? a : greatestCommonDivisor(b, a % b);
}

let result = greatestCommonDivisor(5, 15);

console.log(result);
