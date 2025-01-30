import AboutUs from "@/components/about";
import FAQ from "@/components/faqs";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default async function Home() {
  return (
    <>
      <Hero />
      <main
        className="flex-1 flex flex-col gap-6 px-4 h-[1000px]"
        id="services"
      >
        <Services />
        {/* Divider */}
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <AboutUs />
        <FAQ />
      </main>
    </>
  );
}
