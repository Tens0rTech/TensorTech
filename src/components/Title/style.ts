import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

type ContextProps = {
  whiteTitle: boolean;
};

export const Context = styled.p<ContextProps>`
  width: 90%;
  margin: 0 auto;
  font-size: 32px;
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${({ whiteTitle }) => (!whiteTitle ? COLORS.PRIMARY : COLORS.WHITE)};
`;
