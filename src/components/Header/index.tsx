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

type HeaderProps = {
  transparent?: boolean;
  solutionsRef?: React.MutableRefObject<any>;
  clientsRef?: React.MutableRefObject<any>;
  contactRef?: React.MutableRefObject<any>;
  resumeRef?: React.MutableRefObject<any>;
};

export default function Header({
  transparent,
  solutionsRef,
  clientsRef,
  contactRef,
  resumeRef,
}: HeaderProps) {
  return (
    <Head isTransparent={transparent}>
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
            <Option
              onClick={() => {
                solutionsRef?.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Soluções
            </Option>
            <Option
              onClick={() => {
                resumeRef?.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Quem somos
            </Option>
            <Option
              onClick={() => {
                clientsRef?.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Clientes
            </Option>
            <Option>Blog</Option>
            <Button
              width="148px"
              onClick={() => {
                contactRef?.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              CONTATO
            </Button>
          </Spaced>
        </Spaced>
      </Container>
    </Head>
  );
}
