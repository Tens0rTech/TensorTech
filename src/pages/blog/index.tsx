import ContentText from "../../components/ContentText";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../home/Newsletter";
import Soon from "../../assets/images/building.webp";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header notMenu />
      <ContentText title="Blog">
        <img
          src={Soon}
          alt="em construção"
          style={{ width: "60%", margin: "0 auto", display: "flex" }}
        />
      </ContentText>
      <Newsletter />
      <Footer />
    </>
  );
}
