import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Section from "../../components/Section";
import {
  ImpactContent,
  ImpactDescription,
  ImpactSection,
  ImpactTitle,
} from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <ImpactSection>
        <Container>
          <ImpactContent>
            <ImpactTitle>
              Transforme sua Empresa com Soluções Tecnológicas de Ponta.
            </ImpactTitle>
            <ImpactDescription>
              Somos referência em análise de dados,
              <br />
              suporte técnico personalizado e
              <br />
              desenvolvimento sob medida para empresas
              <br />
              de médio Porte.
            </ImpactDescription>
            <Button title="conheça nosso serviços" />
          </ImpactContent>
        </Container>
      </ImpactSection>
      <Section
        title="o que fazemos"
        description="Na TENSORTECH, estamos empenhados em impulsionar o crescimento e o sucesso do seu negócio. Nossos serviços abrangem uma ampla gama de soluções tecnológicas projetadas especificamente para atender às demandas dinâmicas das empresas de médio porte."
      >
        <p>sessão</p>
      </Section>
    </>
  );
}
