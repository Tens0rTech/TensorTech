import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";
import { Context } from "../Button/style";

type HeadProps = {
  isTransparent?: boolean;
  notMenu?: boolean;
};

type OptionsProp = {
  isOpen?: boolean;
};

export const Head = styled.div<HeadProps>`
  width: 100%;
  padding: 2px 0;
  background-color: ${({ isTransparent }) =>
    isTransparent ? "rgba(255,255,255,0.7)" : COLORS.GRAY};
  position: ${({ isTransparent }) => (isTransparent ? "fixed" : "static")};
  z-index: 999;

  @media (max-width: 1100px) {
    background-color: ${COLORS.GRAY};
    position: ${({ notMenu }) => (!notMenu ? "fixed" : "static")};
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 100px;

  @media (max-width: 1100px) {
    width: 80px;
    height: 74px;
  }
`;

export const ImageText = styled.div`
  margin-left: 18px;

  p {
    color: ${COLORS.PRIMARY};
    font-size: 18px;
  }
`;

export const TT = styled.p`
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
`;

export const Tech = styled.p`
  font-weight: ${FONT_WEIGHT.MEDIUM};
`;

export const Spaced = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.div<OptionsProp>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    margin-top: 78px;
    z-index: 999;
    position: fixed;
    flex-direction: column;
    right: 0;
    top: 0;
    width: 60%;
    height: calc(100% - 78px);
    background-color: ${COLORS.WHITE};
    justify-content: flex-start;
    box-shadow: -1px 0px 3px 0px rgba(0, 0, 0, 0.5);
    margin-right: ${({ isOpen }) => (isOpen ? "0px" : "-900px")};
    transition: 0.4s all;
  }
`;

export const Option = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${COLORS.PRIMARY};
  font-weight: ${FONT_WEIGHT.BOLD};
  padding: 8px;
  margin: 2px 4px;
  font-size: 18px;
  &:hover {
    margin-bottom: 0;
    border-bottom: 2px solid ${COLORS.PRIMARY};
  }

  @media (max-width: 1100px) {
    width: 100%;
    border-bottom: 1px solid ${COLORS.GRAY};
    padding: 18px 0;

    &:hover {
      margin-bottom: 2px;
      border-bottom: 1px solid ${COLORS.GRAY};
    }
  }
`;

export const Button = styled(Context)`
  margin-left: 12px;

  @media (max-width: 1100px) {
    margin-left: 0px;
    margin-top: 18px;
    width: 95%;
  }
`;

export const Menu = styled.img`
  width: 38px;
  filter: invert(19%) sepia(65%) saturate(564%) hue-rotate(167deg)
    brightness(92%) contrast(92%);
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }
`;
