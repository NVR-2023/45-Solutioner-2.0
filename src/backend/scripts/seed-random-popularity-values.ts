import { seedPopularityValuesInServiceProfilesTable } from "../server-actions/services/seed-popularity-values-in-service-profile-table";
async function main() {
  const res = await seedPopularityValuesInServiceProfilesTable();
  console.log("Popularity seeding process response:", res);
  process.exit();
}

main();
