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

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 618px;
  justify-content: space-between;

  @media (max-width: 1400px) {
    height: calc(618px * 0.7);
  }

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
  }
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

  @media (max-width: 1400px) {
    width: calc(305px * 0.7);
    height: ${({ little }) => (little ? `98px` : "148px")};

    h3 {
      font-size: calc(64px * 0.7);
    }

    p {
      font-size: ${({ little }) => (little ? "14px" : "20px")};
      padding: 0 16px;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 18px;
  }
`;

export const CardImage = styled.div<CardImageProps>`
  width: ${({ large }) => (large ? "630px" : "305px")};
  height: ${({ tall }) => (tall ? "460px" : "390px")};
  border-radius: 30px;
  background: url(${({ image }) => image});

  @media (max-width: 1400px) {
    width: ${({ large }) => (large ? "440px" : "214px")};
    height: ${({ tall }) => (tall ? "322px" : "274px")};
    background-position: center right;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
