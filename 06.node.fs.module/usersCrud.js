const fs = require("fs");

function getAllUsers() {
    return fs.readFileSync("./users.json", {
        encoding: "utf-8",
        flag: "r"
    });
}

function addUser(newUser) {
    let users = JSON.parse(getAllUsers());

    if (checkUserFields(newUser)) {
        console.log("addable");
        users.push(newUser);
        users = JSON.stringify(users);
        fs.writeFileSync("./users.json", users);
    } else {
        console.error("can't addable");
    }
}

function updateUser(user) {
    let users = JSON.parse(getAllUsers());
    let result = users.find((e) => e.id == user.id);
    if (result) {
        users.splice(
            users.findIndex((e) => e.id == user.id),1, user);
        fs.writeFileSync("./users.json", JSON.stringify(users));
    }
}

function getUserById(id){
    let users = JSON.parse(getAllUsers());
    return users.find(e=>e.id==id);
}

function delUserById(id){
    let users = JSON.parse(getAllUsers());
    if(users.findIndex(e=>e.id ==id) !=-1){
        users.splice(users.findIndex((e) => e.id == id),1);
        fs.writeFileSync("./users.json", JSON.stringify(users));
        console.log("Deleted!")
    }
    
}

function checkUserFields(user) {
    if (user.id != null) {
        if (user.name != null && user.name != "") {
            if (user.username != null && user.username != "") {
                if (user.email != null && user.email != "") {
                    if (user.phone != null && user.phone != "") {
                        if (user.website != null && user.website != "") {
                            return true;
                        }
                    }
                }
            }
        }
    }
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    getUserById,
    delUserById,
};