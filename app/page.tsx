import AboutUs from "@/components/about";
import FAQ from "@/components/faqs";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-16 px-4 py-8 md:px-8 lg:px-12">
        {/* Services Section */}
        <div id="services">
          <Services />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* About Us Section */}
        <div id="about">
          <AboutUs />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>
      </main>
    </>
  );
}