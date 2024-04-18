import {
  getUsers,
  getUsers2,
} from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import {
  getAllServices,
  getAllServicesWithProfiles,
} from "@/backend/database/drizzle/functions-and-queries/services/service-db-functions-and-queries";

import PrivateNavbar from "@/frontend/sections/navbar-private/navbar-private";
import ServicesContentNavbar from "./sub-components/services-content-navbar";
const Services = async () => {
  const data = await getUsers();
  const data2 = await getUsers2();
  const data3 = await getAllServices();
  const data4 = await getAllServicesWithProfiles();

  const data9 = process.env.DEPLOYED_BASE_URL;
  const data10 = process.env.LOCAL_BASE_URL;

  return (
    <div className="m-0 h-screen w-screen bg-neutral-200 py-2 pe-8 ps-6">
      <div className="grid h-full w-full grid-cols-12 grid-rows-12 space-y-2">
        <header className="col-span-12 row-span-2 flex flex-col space-y-2 bg-neutral-200">
          <div className="flex-grow"><PrivateNavbar /></div>
          <div className="flex-grow"><ServicesContentNavbar /></div>
        </header>
        <main className="col-span-12 row-span-10 overflow-y-auto bg-neutral-200">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </main>
      </div>
    </div>
  );
};

export default Services;
