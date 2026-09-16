import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueBlock } from "@/components/sections/value-block";
import { ForTeachers } from "@/components/sections/for-teachers";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <Hero />
        <HowItWorks />
      </div>
      <ValueBlock />
      <ForTeachers />
      <Faq />
      <FinalCta />
      <div className="relative">
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
