/**
 * Create an Object for Students and Address with various Properties and Methods
 */

const Students = {
  name: "Monika",
  age: 24,
  rank: 5,
  country: "Poland",
};

const Address = {
  street: "Narutowicz",
  city: "Wroclaw",
  pinCode: 401209,
  state: "Dolnoslaskie",
  country: "Poland",
};

function showObjectDetails(object) {
  for (let key in object) {
    console.log(key, " : ", object[key]);
  }
}

showObjectDetails(Students);
