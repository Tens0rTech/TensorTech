import { styled } from "styled-components";
import { COLORS } from "../../../theme";

type CardNumberProps = {
  textColor: string;
  little?: boolean;
};

type CardImageProps = {
  image: string;
  large?: boolean;
  tall?: boolean;
};

export const AboutCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
`;

export const CardNumber = styled.div<CardNumberProps>`
  width: 305px;
  background-color: ${COLORS.WHITE};
  color: ${({ textColor }) => textColor ?? "#000"};
  height: ${({ little }) => (little ? "140px" : "210px")};
`;

export const CardImage = styled.div<CardImageProps>`
  width: ${({ large }) => (large ? "630px" : "305px")};
  height: ${({ tall }) => (tall ? "434px" : "390px")};
`;
