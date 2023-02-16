/**
 * Create a function which returns the maximum ie. largest number from an array
 */

function getLargestNumber(arrayToSearch) {
  if (arrayToSearch.length <= 0) return "Array is empty | Nothing to search!";

  return arrayToSearch.reduce((largestNumber, currentSearchElement) => {
    return currentSearchElement > largestNumber
      ? currentSearchElement
      : largestNumber;
  });
}

const versionArray = [5, 100, 3, 7, 8, 12, 1];
const maxValue = getLargestNumber(versionArray);

console.log("The largest number is: " + maxValue);
