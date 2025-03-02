/**
 * Unique Word Counter
 */
function countUniqueWords(sentence){
    const arr = sentence.split(' ').map(word => word.replace(",", ""));
    const uniqueWords = new Set(arr);
    console.log(uniqueWords.values());
    return uniqueWords.size;
}

// Tests
console.log(countUniqueWords("Ala ma kota, Hania ma kota, Ewa ma psa"));