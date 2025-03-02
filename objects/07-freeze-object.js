/**
 * Create an object and prevent any modifications.
 */
function freezeObject(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            freezeObject(obj[key]);
        }
    });
    return obj;
}

// Test
const nestedObj = {
    name: "Alice",
    details: { age: 25, address: { city: "New York" } }
};

freezeObject(nestedObj);

nestedObj.details.age = 30;
nestedObj.details.address.city = "Los Angeles";

console.log(nestedObj.details.age);
console.log(nestedObj.details.address.city);