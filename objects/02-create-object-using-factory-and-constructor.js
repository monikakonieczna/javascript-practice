/**
 * Create an Object of Students by using Factory and Constructor methods
 */

//factory method
function createObjFactoryMethod(name, age, rank, country){
    return {
        name, age, rank, country
    }
}

let Student1 = createObjFactoryMethod('Monika', 25, 4, 'Poland');
console.log('Student1', Student1);

//constructor
function Student(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.country = country
}

let Student2 = new Student('Adrian', 26, 2, 'Germany');
console.log('Student2', Student2);