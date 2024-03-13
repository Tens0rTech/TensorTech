import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../theme";

type CardNumberProps = {
  textColor: string;
  little?: boolean;
};

type CardImageProps = {
  image: string;
  large?: boolean;
  tall?: boolean;
};

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AboutCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 618px;
  justify-content: space-between;
`;

export const CardNumber = styled.div<CardNumberProps>`
  width: 305px;
  background-color: ${COLORS.WHITE};
  color: ${({ textColor }) => textColor ?? "#000"};
  height: ${({ little }) => (little ? "140px" : "210px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  h3 {
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: 64px;
  }

  p {
    font-weight: ${FONT_WEIGHT.REGULAR};
    font-size: ${({ little }) => (little ? "16px" : "24px")};
    padding: 0 16px;
    text-align: center;
  }
`;

export const CardImage = styled.div<CardImageProps>`
  width: ${({ large }) => (large ? "630px" : "305px")};
  height: ${({ tall }) => (tall ? "460px" : "390px")};
  border-radius: 30px;
  background: url(${({ image }) => image});
`;
