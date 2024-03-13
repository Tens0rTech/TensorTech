import Container from "../Container";
import {
  Button,
  Flex,
  Head,
  ImageText,
  Option,
  Spaced,
  TT,
  Tech,
} from "./style";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Head isTransparent>
      <Container>
        <Spaced>
          <Flex>
            <img src={logo} alt="tensortech logo" width={100} />
            <ImageText>
              <TT>TENSORTECH</TT>
              <Tech>Tecnologia</Tech>
            </ImageText>
          </Flex>
          <Spaced>
            <Option id="solutions">Soluções</Option>
            <Option id="about">Quem somos</Option>
            <Option id="client">Clientes</Option>
            <Option id="blog">Blog</Option>
            <Button onClick={() => console.log("contato")}>CONTATO</Button>
          </Spaced>
        </Spaced>
      </Container>
    </Head>
  );
}
