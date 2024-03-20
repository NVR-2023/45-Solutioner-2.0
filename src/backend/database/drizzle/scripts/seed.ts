import { NewUser, insertNewUserInDB } from "../db";

async function main() {
  const newUser: NewUser = {
    name: "John Doe",
    email: "johndoe@email.com",
    hashedPassword: "hashedPassword",
  };
  const res = await insertNewUserInDB(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
