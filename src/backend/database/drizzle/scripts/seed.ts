import { NewUser, insertUser } from "../db";

async function main() {
  const newUser: NewUser = {
    email: "3rd@example.com",
    image: "1st image url",
    password: "1st password",
    name: "1st foo",
  };
  const res = await insertUser(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
