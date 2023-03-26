/**
 * Write a function to convert a name into initials. 
 * The output should be two capital letters with a dot separating them.
 */

//array
function abbrevName0(name) {
    let array = name.split(" ");
    return (array[0][0] + "." + array[1][0]).toUpperCase();
}

//loop
function abbrevName1(name) {
    const answer = [name[0]];
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ") {
            answer.push(name[i + 1]);
        }
    }
    return answer.map(e => e.toUpperCase()).join(".");
}

//map
function abbrevName2(name) {
    return name.split(" ").map(e => e.toUpperCase()).join(".");
}

//substring
function abbrevName3(name) {
    return name.split(" ").map(e => e.substring(0, 1).toUpperCase()).join(".");
}

//regex
function abbrevName4(name) {
    return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
}

export default abbrevName0;