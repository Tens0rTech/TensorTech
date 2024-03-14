import BlueSection from "../../../components/BlueSection";

export default function ContactSection() {
  return (
    <BlueSection
      title="Descubra como podemos ser seu parceiro estratégico no caminho para o sucesso tecnológico."
      description="Venha conversar conosco e compreenda o momento atual da sua empresa."
      buttonTitle="Fale Conosco"
      buttonClick={() => console.log("fale conosco")}
    />
  );
}
