import { updateServicesDBTable } from "../services/service-db-functions-and-queries";

async function main() {
  const res = await updateServicesDBTable();
  console.log("updating process response:", res);
  process.exit();
}

main();
