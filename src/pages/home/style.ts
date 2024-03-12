import { styled } from "styled-components";
import background from "../../assets/images/background.png";
import { FONT_WEIGHT } from "../../theme";

export const ImpactSection = styled.div`
  width: 100%;
  height: 900px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
`;

export const ImpactContent = styled.div`
  width: 30%;
  height: 500px;
  position: absolute;
  margin-top: 320px;
`;

export const ImpactTitle = styled.p`
  font-size: 38px;
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
`;

export const ImpactDescription = styled.p`
  padding: 38px 0;
  font-size: 18px;
`;
