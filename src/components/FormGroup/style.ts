import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../theme";
import Arrow from "../../assets/images/arrowDropdown.svg";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLORS.PRIMARY};
  }

  p {
    font-size: 14px;
    color: ${COLORS.RED};
  }

  input,
  select,
  textarea {
    width: calc(100% - 24px);
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 16px;
    padding: 12px;
    margin: 8px 0 4px 0;
  }

  select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: center right;
    width: 100%;
  }

  textarea {
    resize: none;
  }

  option {
    color: #000;
  }

  input[type="radio"] {
    width: 18px;
    height: 18px;
  }
`;
