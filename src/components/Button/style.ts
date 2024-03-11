import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const Context = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  background: ${({ secondary }) =>
    !secondary ? COLORS.PRIMARY : COLORS.SECONDARY};
  color: ${COLORS.WHITE};
  font-weight: ${FONT_WEIGHT.BOLD};
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
`;
