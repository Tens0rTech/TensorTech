import BlueSection from "../../../components/BlueSection";
import BlogImage from "../../../assets/images/blogimage.png";

export default function BlogSection() {
  return (
    <BlueSection
      title="Acesse nosso blog e saiba mais de tecnologia aplicado nas empresas"
      description="Aqui falamos de pessoas, gestão e tecnologia"
      buttonTitle="Blog"
      buttonClick={() => console.log("blog")}
      image={BlogImage}
    />
  );
}
