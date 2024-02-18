"use client";

import React from "react";

import NavbarHomepage from "@/sections/navbar-homepage/navbar-homepage";
import ServicesHomeSection from "@/sections/services-section-home/services-section-home";
import SecuritySectionHome from "@/sections/security-section-home/security-section-home";
import PricingSectionHome from "@/sections/pricing-section-home/pricing-section-home";
import Footer from "@/sections/footer/footer";

export default function Home() {
  return (
    <main id="homePage" className="w-full">
      <div className="flex w-full justify-center">
        <NavbarHomepage />
      </div>
      <div className="border-b-2 border-neutral-300">
        <ServicesHomeSection />
      </div>
      <div className="border-b-2 border-neutral-300">
        <SecuritySectionHome />
      </div>
      <div className="border-b-2 border-neutral-300">
        <PricingSectionHome />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </main>
  );
}
