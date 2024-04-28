"use client"
import { useState } from "react";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

const BookServices = () => {
  const [ isNavbarExpanded , setIsNavbarExpanded ] =  useState(true);
  
  return (
    <div className="flex h-screen flex-col space-y-2">
      <div className="mt-2">
        <NavbarBookServicesContent 
        isNavbarExpanded={isNavbarExpanded}
        setIsNavbarExpanded={setIsNavbarExpanded}
        />
      </div>
      <main className="mx-10 flex-grow justify-center overflow-y-auto bg-green-300"></main>
    </div>
  );
};

export default BookServices;
