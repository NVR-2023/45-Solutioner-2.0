import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";
import { authenticateAndRedirect } from "@/utils/functions/server-functions/authenticate-and-redirect";

const BookServices = () => {
   
  return (
    <div className="flex h-screen flex-col">
      <div className=" mt-2">
        <NavbarBookServicesContent />
      </div>
      <main className="flex-grow overflow-y-auto bg-neutral-100">
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
  );
};

export default BookServices;


/*   const data = await getUsers();
  const data2 = await getUsers2();
  const data3 = await getAllServices();
  const data4 = await getAllServicesWithProfiles();

  const data9 = process.env.DEPLOYED_BASE_URL;
  const data10 = process.env.LOCAL_BASE_URL; */