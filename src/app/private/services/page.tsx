import { getUsers, getUsers2, fetchAllServices } from "@/backend/database/drizzle/db";

import React , {FC} from "react"

const Services:FC = async () => {
   const data = await getUsers();
   const data2 = await getUsers2();
   const data3 = await fetchAllServices();

  return (
    <div className="space-y-3">
      <div>sql-like: {JSON.stringify(data)}</div>
      <div>relational: {JSON.stringify(data2)}</div>
      <div>relational: {JSON.stringify(data3)}</div>
    </div>
  );
};

export default Services;
