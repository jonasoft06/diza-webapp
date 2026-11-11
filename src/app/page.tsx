import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Closing } from "@/components/sections/closing";
import { FAQ } from "@/components/sections/faq";
import { ForStudents } from "@/components/sections/for-students";
import { ForTeachers } from "@/components/sections/for-teachers";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Privacy } from "@/components/sections/privacy";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ForStudents />
      <ForTeachers />
      <Privacy />
      <FAQ />
      {/* Closing masks the pinned Footer as it scrolls away. */}
      <div className="relative">
        <Closing />
        <Footer />
      </div>
    </>
  );
}
