import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Activate } from "@/components/sections/activate";
import { FAQ } from "@/components/sections/faq";
import { ForStudents } from "@/components/sections/for-students";
import { ForTeachers } from "@/components/sections/for-teachers";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ForStudents />
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
