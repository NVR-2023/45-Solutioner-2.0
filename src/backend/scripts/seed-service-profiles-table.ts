import { seedServiceProfilesDBTable } from "../server-actions/services/seed-service-profile-db-table";

async function main() {
  const res = await seedServiceProfilesDBTable();
  console.log("Seeding process response:", res);
  process.exit();
}

main();
