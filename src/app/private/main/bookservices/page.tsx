import { getAllServicesWithProfiles } from "@/backend/database/drizzle/functions-and-queries/services/service-db-functions-and-queries";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";
import Link from "next/link";



const BookServices = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
 

  return (
    <div className="flex h-screen flex-col space-y-2">
      <div className="mt-2">
        <NavbarBookServicesContent />
      </div>
      <main className="flex-grow justify-center mx-10 overflow-y-auto bg-green-300">
 
      </main>
    </div>
  );
};

export default BookServices;
