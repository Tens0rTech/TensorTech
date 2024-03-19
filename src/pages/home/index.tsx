import Header from "../../components/Header";
import Solutions from "./Solutions";
import ImpactionSection from "./ImpactionSection";
import About from "./About";
import Clients from "./Clients";
import ContactSection from "./ContactSection";
import Resume from "./Resume";
import BlogSection from "./BlogSection";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Footer from "../../components/Footer";
import { useRef } from "react";

export default function Home() {
  const solutionsRef = useRef<any>(null);
  const clientsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const resumeRef = useRef<any>(null);

  return (
    <>
      <Header
        transparent
        solutionsRef={solutionsRef}
        clientsRef={clientsRef}
        contactRef={contactRef}
        resumeRef={resumeRef}
      />
      <ImpactionSection />
      <Solutions referance={solutionsRef} />
      <About />
      <Clients referance={clientsRef} />
      <ContactSection />
      <Resume referance={resumeRef} />
      <BlogSection />
      <Contact referance={contactRef} />
      <Newsletter />
      <Footer />
    </>
  );
}
