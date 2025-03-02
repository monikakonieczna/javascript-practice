/**
 * Write a function that merges two objects without modifying the original ones.
 */
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

function mergeObjectsV2(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}


console.log(mergeObjects({name: 'monika', age: 30}, {domain: 'automotive', animal: 'dog'}));
console.log(mergeObjectsV2({name: 'monika', age: 30}, {domain: 'automotive', animal: 'dog'}));