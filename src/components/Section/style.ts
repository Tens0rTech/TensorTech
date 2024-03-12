import { styled } from "styled-components";
import { COLORS } from "../../theme";

type ContextProps = {
  backgroundColor?: string;
};

export const Context = styled.div<ContextProps>`
  padding: 32px 0;
  background: ${({ backgroundColor }) => backgroundColor ?? COLORS.WHITE};
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  padding: 32px 0;
`;
