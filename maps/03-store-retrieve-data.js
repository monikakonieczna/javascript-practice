/**
 * Store user objects in a Map where the key is the user ID and retrieve user details by ID.
 */
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const user1 = new User(1, "Monika");
const user2 = new User(2, "Kamil");

function storeUsers(u1, u2) {
    const userMap = new Map();
    userMap.set(1, u1);
    userMap.set(2, u2);
    return userMap;
}
storeUsers(user1, user2);

function retreiveUser(id){
    
}