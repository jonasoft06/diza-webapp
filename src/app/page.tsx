import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Activate } from "@/components/sections/activate";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Hero } from "@/components/sections/hero";
import { ForTeachers } from "@/components/sections/for-teachers";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero stays pinned while HowItWorks slides over it. */}
      <div className="relative">
        <Hero />
        <HowItWorks />
      </div>
      <Benefits />
      <ForTeachers />
      <FAQ />
      <Activate />
      {/* Testimonials masks the pinned Footer as it scrolls away. */}
      <div className="relative">
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
