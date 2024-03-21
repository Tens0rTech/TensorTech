import { styled } from "styled-components";
import { COLORS } from "../../../theme";

export const NewsBox = styled.div`
  width: 100%;
  border-bottom: 2px solid ${COLORS.WHITE};
`;

export const Subscribe = styled.div`
  width: 45%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
