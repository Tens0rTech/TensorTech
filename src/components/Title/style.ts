import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

type ContextProps = {
  whiteTitle: boolean;
  fullWidth: boolean;
};

export const Context = styled.p<ContextProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "90%")};
  margin: 0 auto;
  font-size: 32px;
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${({ whiteTitle }) => (!whiteTitle ? COLORS.PRIMARY : COLORS.WHITE)};

  @media (max-width: 1400px) {
    font-size: 26px;
  }
`;
