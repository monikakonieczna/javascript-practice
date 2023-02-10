/**
 * Write a function which checks and prints only the string type properties of an object
 */

function checkStringProperties(object){
    for(key in object){
        if(typeof(object[key]) === 'string') {
            console.log(key, ':', object[key]);
        }
    }
}

const Country = {
    name: 'Portugal',
    capitol: 'Lisbon',
    language: 'Portuguese',
    constitution: 1976,
    area: 92.212,
    population: 10352042,
    currency: 'Euro'
}

checkStringProperties(Country);