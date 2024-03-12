import Section from "../../../components/Section";
import { COLORS } from "../../../theme";
import { AboutCards } from "./style";

export default function About() {
  return (
    <Section
      title="Na TENSORTECH, nossa paixão pela tecnologia impulsiona cada solução, moldando o futuro de empresas e desafiando os limites do possível."
      backgroundColor={COLORS.GRAY}
      description=" "
    >
      <div>
        <AboutCards></AboutCards>
      </div>
    </Section>
  );
}
