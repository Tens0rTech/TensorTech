import { styled } from "styled-components";
import { FONT_WEIGHT } from "../../../theme";
import background from "../../../assets/images/background.png";
import backgroundMobile from "../../../assets/images/backgroundMobile.png";

export const ImpactSection = styled.div`
  width: 100%;
  height: 900px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @media (max-width: 1400px) {
    height: calc(900px * 0.7);
  }

  @media (max-width: 950px) {
    background-image: url(${backgroundMobile});
    background-position: center left;
    padding-top: 78px;
    height: auto;
  }
`;

export const ImpactContent = styled.div`
  width: 650px;
  height: 500px;
  position: absolute;
  margin-top: 320px;

  @media (max-width: 1400px) {
    width: calc(650px * 0.7);
    height: calc(500px * 0.7);
    margin-top: calc(320px * 0.7);
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-top: 0px;
    padding: 120px 0;
    position: static;
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const ImpactTitle = styled.p`
  font-size: 38px;
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};

  @media (max-width: 1400px) {
    font-size: calc(38px * 0.7);
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ImpactDescription = styled.p`
  padding: 38px 0;
  font-size: 18px;
  width: 65%;

  @media (max-width: 1400px) {
    font-size: 16px;
    width: 80%;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;
