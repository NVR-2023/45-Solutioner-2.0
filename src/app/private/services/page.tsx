import {
  getUsers,
  getUsers2,
} from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import { getAllServices, getAllServicesWithProfiles } from "@/backend/database/drizzle/functions-and-queries/services/service-db-functions-and-queries";

import React, { FC } from "react";

const Services: FC = async () => {
  const data = await getUsers();
  const data2 = await getUsers2();
  const data3 = await getAllServices();
  const data4 = await getAllServicesWithProfiles();

  const data9 = process.env.DEPLOYED_BASE_URL;
  const data10 = process.env.LOCAL_BASE_URL;

  return (
    <div className="space-y-3">
      <div>Database connected</div>
      <div>1: {JSON.stringify(data)}</div>
      <div>2: {JSON.stringify(data2)}</div>
      <div className="font-bold">
        Deployed base URL: {JSON.stringify(data9)}
      </div>
      <div className="font-bold">Home base URL: {JSON.stringify(data10)}</div>
      <div>**************************************************</div>
      <div>relational: {JSON.stringify(data3)}</div>
      <div>++++++++++++++++++++++++++++++++++++++++++++++++++</div>
      <div>relational: {JSON.stringify(data4)}</div>
    </div>
  );
};

export default Services;
