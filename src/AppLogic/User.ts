import { Storage } from "./Storage";

export interface User {
  username: string;
  password: string;
}

export default function createUser(username: string, password: string) {
  function handleRegisterUser() {
    let currentUsers: User[];
    if (Storage.readData("users")) {
      currentUsers = Storage.readData("users");
    } else {
      currentUsers = [];
    }
    let user = currentUsers.find(function (user: User) {
      return user.username === username;
    });
    if (user) {
      return false;
    } else {
      let newUser = {
        username,
        password,
      };
      currentUsers.push(newUser);
      Storage.createData("users", currentUsers);
      return true;
    }
  }

  return { handleRegisterUser };
}
