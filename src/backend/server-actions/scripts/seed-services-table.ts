import { seedServicesDBTable } from "../services/ssed-services-db-table";

async function main() {
  const res = await seedServicesDBTable();
  console.log("Seeding process response:", res);
  process.exit();
}

main();
