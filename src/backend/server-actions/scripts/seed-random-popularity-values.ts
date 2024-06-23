import { seedPopularityValuesInServiceProfilesTable } from "../services/service-db-functions-and-queries";

async function main() {
  const res = await seedPopularityValuesInServiceProfilesTable();
  console.log("Popularity seeding process response:", res);
  process.exit();
}

main();
