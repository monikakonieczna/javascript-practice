/**
 * Array iterator entries using entries and looping items
 */

const arr1 = ["Monika", "Krystian", 67];
const adder = arr1.entries();

console.log(adder.next());
console.log(adder.next().value);

for (let item of adder) {
  console.log(item[1]);
}
//result: undefined as there is nothing left
console.log(adder.next());

const adder1 = arr1.entries();
let val = adder1.next();
while (val.value) {
  console.log(val.value[1]);
  val = adder1.next();
}
