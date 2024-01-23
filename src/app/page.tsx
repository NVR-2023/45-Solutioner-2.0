import HomeNavbar from "@/sections/homenavbar/homenavbar";
import ServicesHomeSection from "@/sections/servicessectiomhome/servicessectionhome";
import SecuritySectionHome from "@/sections/securitysectionhome/securitysectionhome";
import PricingSectionHome from "@/sections/pricingsectionhome/pricingsectionhome";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <ServicesHomeSection />
      <SecuritySectionHome />
      <PricingSectionHome/>
    </main>
  );
}
