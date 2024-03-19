import { styled } from "styled-components";

export const Box = styled.div`
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: calc(1280px * 0.7);
  }

  @media (max-width: 950px) {
    width: 95%;
  }
`;
