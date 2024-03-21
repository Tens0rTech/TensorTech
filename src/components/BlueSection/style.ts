import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const Content = styled.div`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};

  @media (max-width: 1100px) {
    padding: 48px 0;
  }
`;

export const Section = styled.div`
  width: 48%;
  padding: 80px 0;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Description = styled.p`
  font-weight: ${FONT_WEIGHT.MEDIUM};
  font-size: 20px;
  padding: 24px 0;
`;

export const ImageSection = styled.img`
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;
