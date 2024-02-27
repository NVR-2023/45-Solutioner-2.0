import { NewUser, insertUser } from "../db";

async function main() {
  const newUser: NewUser = {
    name: "John Doe",
    email: "johndoe@email.com",
    password: "password",
  };
  const res = await insertUser(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
