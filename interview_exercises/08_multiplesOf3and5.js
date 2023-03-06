function multiplesOf3And5(number) {
  let map = new Map();
  let sum = 0;

  for (let i = 1; i < number; i++) {
    map.set(i, i);
    if (i % 3 == 0 || i % 5 == 0) {
      map.set(i, "found");
      sum += i;
    }
  }
  //console.log(map);
  return sum;
}

let test1 = multiplesOf3And5(1000);
console.log(test1);
