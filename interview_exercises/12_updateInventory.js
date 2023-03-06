function updateInventory(arr1, arr2) {
  let currInvMap = new Map(arr1.map((el) => el.reverse()));
  let newInvMap = new Map(arr2.map((el) => el.reverse()));

  for (let [product, value] of newInvMap) {
    if (currInvMap.has(product)) {
      currInvMap.set(product, currInvMap.get(product) + value);
    } else {
      currInvMap.set(product, value);
    }
  }

  return [...currInvMap].sort().map((el) => el.reverse());
}

var oldList = [
  [1, "Harry Potter"],
  [3, "Language C++"],
  [5, "Przesilenie"],
];

var newlist = [
  [1, "Toothpaste"],
  [7, "Microphone"],
  [8, "Harry Potter"],
];

arr = updateInventory(oldList, newlist);
console.log(arr);
