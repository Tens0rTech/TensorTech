import Section from "../../../components/Section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeK from "../../../assets/images/carousel/kek.svg";
import Orletti from "../../../assets/images/carousel/orletti.svg";
import Unimed from "../../../assets/images/carousel/unimed.svg";
import Mondiale from "../../../assets/images/carousel/mondiale.svg";
import { Dot, Dots } from "./style";
import Slide from "./slide";

export default function Clients({ referance }: SectionsProps) {
  const images = [KeK, Orletti, Unimed, Mondiale];

  const settings = {
    dots: images.length > 4,
    infinite: images.length > 4,
    autoplay: images.length > 4,
    slidesToScroll: images.length > 4 ? 1 : 4,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          dots: images.length > 3,
          infinite: images.length > 3,
          autoplay: images.length > 3,
          slidesToScroll: images.length > 3 ? 1 : 3,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <Dots>
        <Dot> {dots} </Dot>
      </Dots>
    ),
  };

  return (
    <Section
      referance={referance}
      title="algum dos nossos clientes"
      description="Na TENSORTECH, acreditamos no relacionamento duradouro, de transparência e confiança."
    >
      <div style={{ padding: "32px 0" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Slide image={image} props={index} />
          ))}
        </Slider>
      </div>
    </Section>
  );
}
