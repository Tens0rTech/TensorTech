import Button from "../../../components/Button";
import Container from "../../../components/Container";
import {
  ImpactContent,
  ImpactDescription,
  ImpactSection,
  ImpactTitle,
} from "./style";

export default function ImpactionSection({ referance }: SectionsProps) {
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
            click={() =>
              referance?.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            width={window.innerWidth > 1366 ? "50%" : "75%"}
          />
        </ImpactContent>
      </Container>
    </ImpactSection>
  );
}
