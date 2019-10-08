import {getUsers, getUserById ,addUser, deleteUser} from "./db";

// const person  =  {
//   name:"name",
//   age:18,
//   gender:"female"
// }

const resolvers = {
  Query : {
    users:()=> getUsers(),
    user:(_, {id}) =>   getUserById(id)

  },
  Mutation: {
    addUser:(_, {name, email}) => addUser(name,email),
    deleteUser:(_, {id}) => deleteUser(id)
  }
};


export default resolvers
