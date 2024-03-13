import Button from "../../../components/Button";
import Container from "../../../components/Container";
import {
  ImpactContent,
  ImpactDescription,
  ImpactSection,
  ImpactTitle,
} from "./style";

export default function ImpactionSection() {
  return (
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
          <Button
            title="conheça nosso serviços"
            click={() => console.log("contato")}
          />
        </ImpactContent>
      </Container>
    </ImpactSection>
  );
}
