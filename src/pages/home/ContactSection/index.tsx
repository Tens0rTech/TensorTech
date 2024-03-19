import BlueSection from "../../../components/BlueSection";
import Button from "../../../components/Button";

export default function ContactSection({ referance }: SectionsProps) {
  return (
    <BlueSection
      title="Descubra como podemos ser seu parceiro estratégico no caminho para o sucesso tecnológico."
      description="Venha conversar conosco e compreenda o momento atual da sua empresa."
      buttonTitle="Fale Conosco"
      buttonClick={() => console.log("fale conosco")}
    >
      <Button
        title={"Fale Conosco"}
        click={() =>
          referance?.current.scrollIntoView({
            behavior: "smooth",
          })
        }
        secondary
        width={window.innerWidth > 1366 ? "454px" : "318px"}
      />
    </BlueSection>
  );
}
