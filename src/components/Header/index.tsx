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
    <Head isTransparent={true}>
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
            <Option>Soluções</Option>
            <Option>Quem somos</Option>
            <Option>Clientes</Option>
            <Option>Blog</Option>
            <Button width="148px" onClick={() => console.log("contato")}>
              CONTATO
            </Button>
          </Spaced>
        </Spaced>
      </Container>
    </Head>
  );
}
