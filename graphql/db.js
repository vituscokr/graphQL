let users = [
  {
    id:0,
    name:"name",
    age:18,
    gender:"female",
    email:"a@a.com"
  },
  {
    id:1,
    name:"name1",
    age:19,
    gender:"female",
    email:"a@a.com"
  },
  {
    id:2,
    name:"name3",
    age:20,
    gender:"female",
    email:"a@a.com"
  }
];


export const getUsers = () => users;
export const getUserById = id => {
  const filteredPeople = users.filter(users => users.id === id);

  // console.log(String(id));
  // console.log(filteredPeople);
  return filteredPeople[0];
}

export const deleteUser = id => {
  const deletedUsers = users.filter(users => users.id !== id )
  if(users.length > deletedUsers.length) {
    users = deletedUsers
    return true
  }else {
    return false
  }
}

export const addUser = (name,email) => {
  const newUser = {
    id:`${users.length + 1}`,
    name,
    email,
    age:19,
    gender:"female"
  }
  users.push(newUser);
  return newUser;
}
