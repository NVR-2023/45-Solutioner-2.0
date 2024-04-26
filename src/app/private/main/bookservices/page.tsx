"use client"
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";
import { useSearchParams } from "next/navigation";
const BookServices = () => {
   
  const existingSearchParams = useSearchParams();
  const existingSearchParamsArray = Array.from(existingSearchParams.entries());

 return (
   <div className="flex h-screen flex-col">
     <div className="mt-2">
       <NavbarBookServicesContent />
     </div>
     <main className="flex-grow overflow-y-auto bg-neutral-100">
       {existingSearchParamsArray.map(([key, value]) => (
         <div key={key} className="flex">
           <div>{key}:</div>
           <div>{value}</div>
         </div>
       ))}
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