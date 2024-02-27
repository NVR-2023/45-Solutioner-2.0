import { getUsers , getUsers2 } from "@/backend/database/drizzle/db";

import React , {FC} from "react"

const Services:FC = async () => {
   const data = await getUsers();
   const data2 = await getUsers2();

  return (
    <div>
      <div>sql-like: {JSON.stringify(data)}</div>
      <div>relational: {JSON.stringify(data2)}</div>
    </div>
  );
};

export default Services;
