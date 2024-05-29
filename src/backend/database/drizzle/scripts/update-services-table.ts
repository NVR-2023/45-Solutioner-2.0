import { updateServiceDBTable } from "../functions-and-queries/services/service-db-functions-and-queries";

async function main() {
  const res = await updateServiceDBTable();
  console.log("updating process response:", res);
  process.exit();
}

main();
