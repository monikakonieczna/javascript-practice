function simmetricDiffer(arr1, arr2) {
  let getDiff = filter(arr1, arr2).concat(filter(arr2, arr1));

  return getDiff;

  function filter(a1, a2) {
    return a1.filter(function (item) {
      return a2.indexOf(item) === -1;
    });
  }
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [4, 5, 6, 7, 8];
console.log(simmetricDiffer(arr1, arr2));
