import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const Section = styled.div`
  width: 100%;
  padding: 80px 0;
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-weight: ${FONT_WEIGHT.MEDIUM};
  font-size: 24px;
  padding: 18px 0;
`;

export const ImageSection = styled.img`
  width: 534px;
`;
