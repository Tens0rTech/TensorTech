import Search from "../../../assets/images/search.svg";
import Chart from "../../../assets/images/chart.svg";
import Headset from "../../../assets/images/headset.svg";
import Section from "../../../components/Section";
import { Cards } from "./style";
import SolutionCard from "./solutionCard";
import { useNavigate } from "react-router-dom";

export default function Solutions({ referance }: SectionsProps) {
  const navigate = useNavigate();
  return (
    <Section
      referance={referance}
      title="o que fazemos"
      description="Na TENSORTECH, estamos empenhados em impulsionar o crescimento e o sucesso do seu negócio. Nossos serviços abrangem uma ampla gama de soluções tecnológicas projetadas especificamente para atender às demandas dinâmicas das empresas de médio porte."
    >
      <Cards>
        <SolutionCard
          title="Consultoria Tecnológica Personalizada"
          description="Oferecemos consultoria tecnológica personalizada para empresas de
          médio porte que buscam otimizar sua infraestrutura e impulsionar a
          inovação. Nossa equipe de especialistas em tecnologia está pronta para
          fornecer insights estratégicos e soluções práticas para os desafios
          específicos do seu negócio."
          image={Search}
          click={"/consultoria-tecnologica"}
        />
        <SolutionCard
          title="Análise de Dados Profunda e Estratégica"
          description="Utilizamos tecnologia de ponta e expertise especializada para
          realizar análises detalhadas dos seus dados, fornecendo insights
          estratégicos que orientam suas decisões de negócios e impulsionam
          o crescimento sustentável."
          image={Chart}
          click={"/analise-de-dados"}
        />
        <SolutionCard
          title="Suporte Técnico Personalizado e Confiável"
          description="Nossa equipe dedicada de profissionais de TI está disponível para
          oferecer suporte técnico contínuo e personalizado, garantindo a
          estabilidade e a eficiência dos seus sistemas tecnológicos, para
          que você possa se concentrar no que faz de melhor: administrar seu
          negócio."
          image={Headset}
          click={"/suporte-tecnico"}
        />
        <SolutionCard
          title="Desenvolvimento Sob Medida de Soluções Tecnológicas"
          description=" Criamos soluções personalizadas e inovadoras para atender às
          necessidades exclusivas da sua empresa. Do desenvolvimento de
          software sob medida à integração de sistemas complexos, estamos
          aqui para ajudá-lo a atingir seus objetivos de negócios com
          eficiência e excelência."
          image={Search}
          click={"/desenvolvimento"}
        />
      </Cards>
    </Section>
  );
}
