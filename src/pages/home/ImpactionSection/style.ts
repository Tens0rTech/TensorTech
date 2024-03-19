import { styled } from "styled-components";
import background from "../../../assets/images/background.png";
import { FONT_WEIGHT } from "../../../theme";

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
`;

export const ImpactTitle = styled.p`
  font-size: 38px;
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};

  @media (max-width: 1400px) {
    font-size: calc(38px * 0.7);
  }
`;

export const ImpactDescription = styled.p`
  padding: 38px 0;
  font-size: 18px;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;
