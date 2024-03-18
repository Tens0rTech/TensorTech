import BlueSection from "../../../components/BlueSection";
import Button from "../../../components/Button";

export default function ContactSection() {
  return (
    <BlueSection
      title="Descubra como podemos ser seu parceiro estratégico no caminho para o sucesso tecnológico."
      description="Venha conversar conosco e compreenda o momento atual da sua empresa."
      buttonTitle="Fale Conosco"
      buttonClick={() => console.log("fale conosco")}
    >
      <Button
        title={"Fale Conosco"}
        click={() => console.log("fale conosco")}
        secondary
        width={"454px"}
      />
    </BlueSection>
  );
}
