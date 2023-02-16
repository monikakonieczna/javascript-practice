/**
 * Write function to check object equality
 */

//constructor
function Student(name, age, faculty) {
  this.name = name;
  this.age = age;
  this.faculty = faculty;
}

let Student1 = new Student("Monika", 24, "Control Engineering");
console.log("Student1: ", Student1);

let Student2 = new Student("Marcin", 25, "Network Engineer");
console.log("Student2: ", Student2);

let Student3 = new Student("Monika", 24, "Control Engineering");
console.log("Student1: ", Student3);

//Objects are reference type, can have same properties but they are from different memory location
function isObjectEqual(object1, object2) {
  return (
    object1.name === object2.name &&
    object1.age === object2.age &&
    object1.faculty === object2.faculty
  );
}

console.log(
  "Objects have the same properties: ",
  isObjectEqual(Student1, Student3)
);

//Objects are same if both are pointed to sam eobject
function isObjectPointSame(obj1, obj2) {
  return obj1 === obj2;
}

let isSame = isObjectPointSame(Student1, Student3);
console.log("Objects point to the same object ", isSame);
