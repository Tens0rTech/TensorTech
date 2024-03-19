import Button from "../../../components/Button";
import Container from "../../../components/Container";
import {
  ImpactContent,
  ImpactDescription,
  ImpactSection,
  ImpactTitle,
} from "./style";

type InspectionProps = SectionsProps & {
  topRef?: React.MutableRefObject<any>;
};

export default function ImpactionSection({
  topRef,
  referance,
}: InspectionProps) {
  const buttonWidth = window.innerWidth > 1366 ? "50%" : "75%";
  return (
    <ImpactSection ref={topRef}>
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
