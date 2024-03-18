import { styled } from "styled-components";
import { SpinnerProps } from ".";
import { COLORS } from "../../theme";

export const Content = styled.div<SpinnerProps>`
  width: ${({ wh }) => wh + "px"};
  height: ${({ wh }) => wh + "px"};
  border: 4px solid ${COLORS.WHITE};
  border-radius: 50%;
  border-left-color: ${COLORS.LIGHT_BLUE};
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
