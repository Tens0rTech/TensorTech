import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 14px;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLORS.PRIMARY};
  }

  p {
    font-size: 14px;
    color: ${COLORS.RED};
  }

  input {
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 16px;
    padding: 12px;
    margin: 8px 0 4px 0;
  }
`;
