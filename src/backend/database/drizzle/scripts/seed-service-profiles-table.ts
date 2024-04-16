import { seedServiceProfilesDBTable } from "../functions-and-queries/services/service-db-functions-and-queries";

async function main() {
  const res = await seedServiceProfilesDBTable();
  console.log("Seeding process response:", res);
  process.exit();
}

main();
