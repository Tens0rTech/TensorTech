import Section from "../../../components/Section";
import { COLORS } from "../../../theme";
import AboutCard from "./aboutCard";
import { AboutCards, CardImage, Flex } from "./style";
import Desktop from "../../../assets/images/desktop.png";
import Work from "../../../assets/images/work.png";
import Highfive from "../../../assets/images/highfive.png";

export default function About() {
  return (
    <Section
      title="Na TENSORTECH, nossa paixão pela tecnologia impulsiona cada solução, moldando o futuro de empresas e desafiando os limites do possível."
      backgroundColor={COLORS.GRAY}
      description=" "
    >
      <Flex>
        <AboutCards>
          <AboutCard
            color={COLORS.SECONDARY}
            number={30}
            text="projetos executados"
          />
          <CardImage image={Desktop} />
        </AboutCards>
        <AboutCards>
          <CardImage image={Work} large />
          <Flex>
            <AboutCard
              color={COLORS.LIGHT_BLUE}
              number={5}
              text="anos de experiência"
            />
            <AboutCard
              color={COLORS.RED}
              number={10}
              text="clientes satisfeitos"
            />
          </Flex>
        </AboutCards>
        <AboutCards>
          <CardImage image={Highfive} tall />
          <AboutCard
            color={COLORS.SECONDARY}
            number={5}
            text="apaixonados por tecnologia"
            little={window.innerWidth < 950}
          />
        </AboutCards>
      </Flex>
    </Section>
  );
}
