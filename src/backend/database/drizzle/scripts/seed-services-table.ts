import { NewService, seedServicesDBTable } from "../db";

async function main() {
  const res = await seedServicesDBTable();
  console.log("Seeding process response:", res);
  process.exit();
}

main();
