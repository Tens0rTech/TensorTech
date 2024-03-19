import { styled } from "styled-components";
import { COLORS } from "../../theme";

type ContextProps = {
  backgroundColor?: string;
};

export const Context = styled.div<ContextProps>`
  padding: 48px 0;
  background: ${({ backgroundColor }) => backgroundColor ?? COLORS.WHITE};
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const Description = styled.p`
  font-size: 20px;
  padding: 24px 0;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const Children = styled.div`
  margin-top: 24px;
`;
