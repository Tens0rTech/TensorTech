import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const Content = styled.div`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
`;

export const Section = styled.div`
  width: 48%;
  padding: 80px 0;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-weight: ${FONT_WEIGHT.MEDIUM};
  font-size: 20px;
  padding: 24px 0;
`;

export const ImageSection = styled.img`
  width: 50%;
`;
