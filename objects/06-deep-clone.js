/**
 * Write a function that creates a deep copy of an object.
 */
function deepClone(obj) {
    const clonedObj = structuredClone(obj);
    return clonedObj;
}

// Test
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);

clone.b.c = 42;

console.log(obj.b.c);
console.log(clone.b.c);
