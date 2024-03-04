import { NewUser, insertUserInDBTable } from "../db";

async function main() {
  const newUser: NewUser = {
    name: "John Doe",
    email: "johndoe@email.com",
    password: "password",
  };
  const res = await insertUserInDBTable(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
