import Container from "../../../components/Container";
import { Content, Flex, ResumeImage, ResumeInfo, TT, Title } from "./style";

export default function Resume({ referance }: SectionsProps) {
  return (
    <div ref={referance}>
      <Container>
        <Flex>
          <Content className="resume-image">
            <ResumeImage />
          </Content>
          <Content>
            <TT>TENSORTECH</TT>
            <Title>ELEVANDO AS EMPRESAS À EXCELENCIA TECNOLÓGICA</Title>
            <ResumeInfo>
              <p>
                Nós acreditamos que a tecnologia é o motor do crescimento das
                empresas. Entendemos que para uma empresa crescer e se destacar,
                ser competitiva e ter destaque nacional ela precisa de três
                pilares:
              </p>
              <ul>
                <li>Pessoas</li>
                <li>Gestão</li>
                <li>Tecnologia</li>
              </ul>
              <p>
                Por isso focamos em atrair, reter, desenvolver e desafiar as
                pessoas, acreditamos que a equipe precisa se desenvolver além
                das tecnologias atuais, aprender afundo a teoria, mesmo que não
                pareça aplicável de início, mas que irá pavimentar o caminho
                para a inovação tecnológica no curto e longo prazo.
              </p>
              <p>
                Buscamos sempre eficiência operacional, bater metas é o que
                mantem a empresa e sonhos vivos. Gerir uma empresa requer
                energia, aproveitar a caminhada e comemorar cada conquista.
                Construir uma cultura de execução é o cerne de uma empresa de
                sucesso e indicadores estratégicos, táticos e operacionais são a
                visão do funcionamento dessa cultura.
              </p>
              <p>
                As empresas estão focadas em seu negócio, fazendo seu trabalho
                diário que sempre funcionou e garantiu com que cheguem ao
                patamar que estão hoje, e não veem que o que trouxe elas a esse
                crescimento não é o que vai levar para o próximo nível,
                principalmente as médias empresas. Buscamos sempre a automação,
                seja de qualquer atividade, para gerar oportunidades de
                escalabilidade da operação e expansão do negócio.
              </p>
              <p>
                Somos apaixonados por esse jogo de pessoas, tecnologia e gestão,
                e estamos sempre evoluindo para atender melhor nossos clientes.
              </p>
            </ResumeInfo>
          </Content>
        </Flex>
      </Container>
    </div>
  );
}
