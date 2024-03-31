import { NewUser, insertNewUserInDb } from "../db";

async function main() {
  const newUser: NewUser = {
    id: "010101011",
    name: "John Doe",
    email: "johndoe@email.com",
    hashedPassword: "hashedPassword",
  };
  const res = await insertNewUserInDb(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
