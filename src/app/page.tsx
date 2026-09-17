import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Activar } from "@/components/sections/activar";
import { Beneficios } from "@/components/sections/beneficios";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Hero } from "@/components/sections/hero";
import { ParaMaestros } from "@/components/sections/para-maestros";
import { PreguntasFrecuentes } from "@/components/sections/preguntas-frecuentes";
import { Testimonios } from "@/components/sections/testimonios";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero stays pinned while ComoFunciona slides over it. */}
      <div className="relative">
        <Hero />
        <ComoFunciona />
      </div>
      <Beneficios />
      <ParaMaestros />
      <PreguntasFrecuentes />
      <Activar />
      {/* Testimonios masks the pinned Footer as it scrolls away. */}
      <div className="relative">
        <Testimonios />
        <Footer />
      </div>
    </>
  );
}
