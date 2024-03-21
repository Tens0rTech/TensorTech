import { styled } from "styled-components";

export const Box = styled.div`
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1370px) {
    width: 1100px;
  }

  @media (max-width: 1100px) {
    width: 92%;
  }
`;
