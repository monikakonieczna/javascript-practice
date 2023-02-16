/**
 * Create a function which counts the search occurances from an array
 */

function countSearchOccurances(arrayToSearch, elementsToSearch) {
  return arrayToSearch.reduce((countAcumulator, currentSearchElement) => {
    let countOccurances = currentSearchElement === elementsToSearch ? 1 : 0;
    return countAcumulator + countOccurances;
  }, 0);
}

const versionArray = [1, 2, 5, 7, 2];
const versionCount = countSearchOccurances(versionArray, 2);

console.log("Version count: ", versionCount);
