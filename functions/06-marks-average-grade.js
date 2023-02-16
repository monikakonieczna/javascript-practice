/**
 * Write a function which Calculate the sum of marks provided in an array, average it and also show Grade
 * Grade criteria/mechanism is:
 * 0% to 70% => D Grade
 * 71% to 79% => C Grade
 * 81% to 89% => B Grade
 * 91% to 100% => A Grade
 */

const marksArray = [55, 45, 87, 99];

function calculateAverage(argArray) {
  let total = 0;
  for (let value of argArray) {
    total += value;
  }
  return total / argArray.length;
}

console.log(calculateAverage(marksArray));

function calculateGrade(argArray) {
  const average = calculateAverage(argArray);

  if (average < 70) return (grade = "D");
  if (average < 80) return (grade = "C");
  if (average < 90) return (grade = "B");
  if (average <= 100) return (grade = "A");
}

console.log("Grade: ", calculateGrade(marksArray));
