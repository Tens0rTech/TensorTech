import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";
import { Context } from "../Button/style";

type HeadProps = {
  isTransparent?: boolean;
};

export const Head = styled.div<HeadProps>`
  width: 100%;
  padding: 2px 0;
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#1c3f5f40"};
  position: ${({ isTransparent }) => (isTransparent ? "absolute" : "static")};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
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

export const Option = styled.a`
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
`;

export const Button = styled(Context)`
  margin-left: 12px;
`;
