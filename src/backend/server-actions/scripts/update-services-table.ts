import { updateServicesDBTable } from "../services/update-services-db-table";

async function main() {
  const res = await updateServicesDBTable();
  console.log("updating process response:", res);
  process.exit();
}

main();
