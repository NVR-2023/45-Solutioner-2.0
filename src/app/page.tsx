"use client";

import React from "react";
import { MobileNavbarContextProvider } from "@/contextes/mobile-navbar-pulldown-context";

import NavbarHomepage from "@/sections/navbar-homepage/navbar-homepage";
import ServicesHomeSection from "@/sections/services-sectiom-home/servicessectionhome";
import SecuritySectionHome from "@/sections/security-section-home/securitysectionhome";
import PricingSectionHome from "@/sections/pricing-section-home/pricingsectionhome";
import Footer from "@/sections/footer/footer";

export default function Home() {
  return (
    <MobileNavbarContextProvider>
      <main id="homePage" className="relative">
        <div>
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
        <div>
          <Footer />
        </div>
      </main>
    </MobileNavbarContextProvider>
  );
}
