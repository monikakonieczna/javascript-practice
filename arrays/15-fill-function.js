/**
 * The fill() method changes all elements in an array to a static value,
 * from a start index (default 0) to an end index (default array.length).
 * It returns the modified array.
 */

/**
 * Task 15 A:
 * You have an array: cars=["Fiat","Skoda","Volvo","Mercedes","Kia","Opel","Citroen"].
 * Print it in the console, but instead of elements 2,3 print word "secret".
 */
console.log("-----Task A-----");
const cars = ["Fiat", "Skoda", "Volvo", "Mercedes", "Kia", "Opel", "Citroen"];
console.log("Cars array before changes: " + pPrint(cars));
cars.fill("secret", 2, 4);
console.log("Cars array after changes: " + pPrint(cars));

//utility
function pPrint(input) {
  let output = "";
  if (input.length >= 1) {
    output += input[0];
  }
  for (let i = 1; i < input.length; i++) {
    output += ", " + input[i];
  }
  return output;
}
