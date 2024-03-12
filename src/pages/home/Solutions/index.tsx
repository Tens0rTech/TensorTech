import Search from "../../../assets/images/search.svg";
import Chart from "../../../assets/images/chart.svg";
import Headset from "../../../assets/images/headset.svg";
import Laptop from "../../../assets/images/laptop.svg";
import Arrow from "../../../assets/images/arrow.svg";
import Section from "../../../components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardLink,
  CardLinkImage,
  CardTitle,
  Cards,
  ImageCard,
} from "./style";

export default function Solutions() {
  return (
    <Section
      title="o que fazemos"
      description="Na TENSORTECH, estamos empenhados em impulsionar o crescimento e o sucesso do seu negócio. Nossos serviços abrangem uma ampla gama de soluções tecnológicas projetadas especificamente para atender às demandas dinâmicas das empresas de médio porte."
    >
      <Cards>
        <Card>
          <CardContent>
            <ImageCard src={Search} />
            <CardTitle>Consultoria Tecnológica Personalizada</CardTitle>
            <CardDescription>
              Oferecemos consultoria tecnológica personalizada para empresas de
              médio porte que buscam otimizar sua infraestrutura e impulsionar a
              inovação. Nossa equipe de especialistas em tecnologia está pronta
              para fornecer insights estratégicos e soluções práticas para os
              desafios específicos do seu negócio.
            </CardDescription>
          </CardContent>
          <CardLink>
            SAIBA MAIS
            <CardLinkImage src={Arrow} />
          </CardLink>
        </Card>
        <Card>
          <CardContent>
            <ImageCard src={Chart} />
            <CardTitle>Análise de Dados Profunda e Estratégica</CardTitle>
            <CardDescription>
              Utilizamos tecnologia de ponta e expertise especializada para
              realizar análises detalhadas dos seus dados, fornecendo insights
              estratégicos que orientam suas decisões de negócios e impulsionam
              o crescimento sustentável.
            </CardDescription>
          </CardContent>
          <CardLink>
            SAIBA MAIS
            <CardLinkImage src={Arrow} />
          </CardLink>
        </Card>
        <Card>
          <CardContent>
            <ImageCard src={Headset} />
            <CardTitle>Suporte Técnico Personalizado e Confiável</CardTitle>
            <CardDescription>
              Nossa equipe dedicada de profissionais de TI está disponível para
              oferecer suporte técnico contínuo e personalizado, garantindo a
              estabilidade e a eficiência dos seus sistemas tecnológicos, para
              que você possa se concentrar no que faz de melhor: administrar seu
              negócio.
            </CardDescription>
          </CardContent>
          <CardLink>
            SAIBA MAIS
            <CardLinkImage src={Arrow} />
          </CardLink>
        </Card>
        <Card>
          <CardContent>
            <ImageCard src={Laptop} />
            <CardTitle>
              Desenvolvimento Sob Medida de Soluções Tecnológicas
            </CardTitle>
            <CardDescription>
              Criamos soluções personalizadas e inovadoras para atender às
              necessidades exclusivas da sua empresa. Do desenvolvimento de
              software sob medida à integração de sistemas complexos, estamos
              aqui para ajudá-lo a atingir seus objetivos de negócios com
              eficiência e excelência.
            </CardDescription>
          </CardContent>
          <CardLink>
            SAIBA MAIS
            <CardLinkImage src={Arrow} />
          </CardLink>
        </Card>
      </Cards>
    </Section>
  );
}
