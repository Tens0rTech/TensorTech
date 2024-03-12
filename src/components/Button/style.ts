import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const Context = styled.button<ButtonProps>`
  all: unset;
  height: 48px;
  cursor: pointer;
  background: ${({ secondary }) =>
    !secondary ? COLORS.PRIMARY : COLORS.SECONDARY};
  color: ${COLORS.WHITE};
  font-weight: ${FONT_WEIGHT.BOLD};
  padding: 0 12px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  font-size: 18px;
`;
