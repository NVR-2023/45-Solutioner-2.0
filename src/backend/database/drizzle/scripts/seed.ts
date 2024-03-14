import { NewUser, insertUserInDBTable } from "../db";

async function main() {
  const newUser: NewUser = {
    name: "John Doe",
    email: "johndoe@email.com",
    hashedPassword: "hashedPassword",
  };
  const res = await insertUserInDBTable(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
