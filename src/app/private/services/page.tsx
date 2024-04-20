
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
  

  return (
    <div className="m-0 h-screen w-screen dark:bg-blue-400 bg-neutral-200 py-2 pe-8 ps-6 dark:bg-gree">
      <div className="h-full w-full flex flex-col space-y-2">
        <header className="flex flex-col space-y-2 bg-neutral-200">
          <div className="h-10"><PrivateNavbar /></div>
          <div className="h-10"><ServicesContentNavbar /></div>
        </header>
        <main className=" flex-grow overflow-y-auto bg-neutral-100">
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


/*   const data = await getUsers();
  const data2 = await getUsers2();
  const data3 = await getAllServices();
  const data4 = await getAllServicesWithProfiles();

  const data9 = process.env.DEPLOYED_BASE_URL;
  const data10 = process.env.LOCAL_BASE_URL; */