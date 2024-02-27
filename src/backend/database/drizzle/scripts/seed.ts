import { NewUser, insertUser } from "../db";

async function main() {
  const newUser: NewUser = {
    email: "2nd@example.com",
    image: "2nd image url",
    name: "2nd foo",
  };
  const res = await insertUser(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
