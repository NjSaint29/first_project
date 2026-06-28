import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
