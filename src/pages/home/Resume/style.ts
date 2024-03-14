import { styled } from "styled-components";
import Office from "../../../assets/images/office.png";
import { COLORS, FONT_WEIGHT } from "../../../theme";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 49%;
`;

export const ResumeImage = styled.div`
  width: 100%;
  height: 860px;
  background: url(${Office});
`;

export const ResumeInfo = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 18px;

  p {
    padding: 6px 0;
  }

  ul {
    padding: 4px 0;
  }

  li {
    padding: 2px 0;
    list-style-position: inside;
  }
`;

export const TT = styled.p`
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  font-size: 20px;
  color: ${COLORS.SECONDARY};
`;

export const Title = styled.p`
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  font-size: 20px;
  padding: 18px 0;
  color: ${COLORS.PRIMARY};
`;
