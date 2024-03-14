import { styled } from "styled-components";
import { COLORS } from "../../../theme";

export const Dots = styled.div`
  border-radius: 10px;
  padding: 10px;
`;

export const Dot = styled.ul`
  margin-bottom: -18px;

  li button:before {
    font-size: 10px;
    opacity: 1;
    color: ${COLORS.PRIMARY};
  }

  li.slick-active button:before {
    color: ${COLORS.SECONDARY};
    opacity: 1;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;
