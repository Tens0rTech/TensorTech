import Header from "../../components/Header";
import Solutions from "./Solutions";
import ImpactionSection from "./ImpactionSection";
import About from "./About";
import Clients from "./Clients";

export default function Home() {
  return (
    <>
      <Header />
      <ImpactionSection />
      <Solutions />
      <About />
      <Clients />
    </>
  );
}
