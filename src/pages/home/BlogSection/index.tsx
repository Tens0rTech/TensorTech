import BlueSection from "../../../components/BlueSection";
import BlogImage from "../../../assets/images/blogimage.webp";
import { useNavigate } from "react-router-dom";

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <BlueSection
      title="Acesse nosso blog e saiba mais de tecnologia aplicado nas empresas"
      description="Aqui falamos de pessoas, gestão e tecnologia"
      buttonTitle="Blog"
      buttonClick={() => navigate("blog")}
      image={BlogImage}
    />
  );
}
