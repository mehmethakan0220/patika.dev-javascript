const {getAllUsers,addUser,updateUser, getUserById,delUserById} = require("./usersCrud")


//read all users information

let users  = getAllUsers();
console.log(users);


//create a new user

let newUser = {
    id: 111,
    name: 'falan filan',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    website: 'ambrose.net'
  }

  addUser(newUser);

//update an existing user with id info

newUser = {
    id: 111,
    name: 'new name 111',
    username: 'Moriah.111',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    website: 'ambrose.net'
  }

// updateUser(newUser);
let user = getUserById(newUser.id);
console.log(user);

//delete user with id

delUserById(newUser.id);
