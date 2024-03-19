import Container from "../Container";
import {
  Button,
  Flex,
  Head,
  ImageLogo,
  ImageText,
  Menu,
  Option,
  Options,
  Spaced,
  TT,
  Tech,
} from "./style";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import Hamburger from "../../assets/images/menu.svg";
import Close from "../../assets/images/close.svg";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  transparent?: boolean;
  notMenu?: boolean;
  topRef?: React.MutableRefObject<any>;
  solutionsRef?: React.MutableRefObject<any>;
  clientsRef?: React.MutableRefObject<any>;
  contactRef?: React.MutableRefObject<any>;
  resumeRef?: React.MutableRefObject<any>;
};

export default function Header({
  transparent,
  notMenu = false,
  topRef,
  solutionsRef,
  clientsRef,
  contactRef,
  resumeRef,
}: HeaderProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Head
      isTransparent={window.innerWidth > 950 ? transparent : false}
      notMenu={notMenu}
    >
      <Container>
        <Spaced>
          <Flex
            onClick={() => {
              if (!notMenu) {
                setIsOpen(false);
                topRef?.current.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                navigate("/");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <ImageLogo src={logo} alt="tensortech logo" />
            <ImageText>
              <TT>TENSORTECH</TT>
              <Tech>Tecnologia</Tech>
            </ImageText>
          </Flex>
          {!notMenu && (
            <>
              <Menu
                src={!isOpen ? Hamburger : Close}
                onClick={() => toggleMenu()}
              />
              <Options isOpen={isOpen}>
                <Option
                  onClick={() => {
                    setIsOpen(false);
                    solutionsRef?.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Soluções
                </Option>
                <Option
                  onClick={() => {
                    setIsOpen(false);
                    resumeRef?.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Quem somos
                </Option>
                <Option
                  onClick={() => {
                    setIsOpen(false);
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
                    setIsOpen(false);
                    contactRef?.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  CONTATO
                </Button>
              </Options>
            </>
          )}
        </Spaced>
      </Container>
    </Head>
  );
}
