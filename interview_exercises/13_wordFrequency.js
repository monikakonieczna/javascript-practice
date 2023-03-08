/**
 * Given a text string and an integer n, return the n most common words in the file (and the number of their occurrences) in decreasing frequency.
 */

function wordFrequency(txt, n) {
  //convert input text to array of words
  const words =
    txt == ""
      ? []
      : txt
          .trim()
          .split(/\s+/)
          .map((word) => word.toLowerCase());

  //count unique words
  const wordCounts = {};

  words.forEach((word) => {
    if (!wordCounts[word]) {
      wordCounts[word] = [word, 0];
    }
    //Increment hashmap count
    wordCounts[word][1]++;
  });

  return Object.values(wordCounts)
    .sort((a, b) => (b[1] != a[1] ? b[1] - a[1] : b[0] > a[0] ? -1 : 1))
    .slice(0, n);
}

const txt = "monika cat string monika cat cat cat cat dog dog ";

console.log(wordFrequency(txt, 2));
