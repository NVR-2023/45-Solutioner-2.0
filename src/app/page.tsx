import HomeNavbar from "@/sections/homenavbar/homenavbar";
import ServicesHomeSection from "@/sections/servicessectiomhome/servicessectionhome";
import SecuritySectionHome from "@/sections/securitysectionhome/securitysectionhome";
import PricingSectionHome from "@/sections/pricingsectionhome/pricingsectionhome";
import Footer from "@/sections/footersectionhome/footer";

export default function Home() {
  return (
    <main id="homePage" className="">
      <HomeNavbar />
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
  );
}
