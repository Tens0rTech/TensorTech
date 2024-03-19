import Button from "../../../components/Button";
import Container from "../../../components/Container";
import {
  ImpactContent,
  ImpactDescription,
  ImpactSection,
  ImpactTitle,
} from "./style";

export default function ImpactionSection({ referance }: SectionsProps) {
  const buttonWidth = window.innerWidth > 1366 ? "50%" : "75%";
  return (
    <ImpactSection>
      <Container>
        <ImpactContent>
          <ImpactTitle>
            Transforme sua Empresa com Soluções Tecnológicas de Ponta.
          </ImpactTitle>
          <ImpactDescription>
            Somos referência em análise de dados, suporte técnico personalizado
            e desenvolvimento sob medida para empresas de médio Porte.
          </ImpactDescription>
          <Button
            title="conheça nosso serviços"
            click={() =>
              referance?.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            width={buttonWidth}
          />
        </ImpactContent>
      </Container>
    </ImpactSection>
  );
}
