import { seedServicesDBTable } from "../services/service-db-functions-and-queries";

async function main() {
  const res = await seedServicesDBTable();
  console.log("Seeding process response:", res);
  process.exit();
}

main();
