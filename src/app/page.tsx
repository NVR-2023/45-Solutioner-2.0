import HomeNavbar from "@/sections/navbar-home/navbar-home";
import ServicesHomeSection from "@/sections/services-sectiom-home/servicessectionhome";
import SecuritySectionHome from "@/sections/security-section-home/securitysectionhome";
import PricingSectionHome from "@/sections/pricing-section-home/pricingsectionhome";
import Footer from "@/sections/footer/footer";

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
