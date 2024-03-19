import { styled } from "styled-components";
import { COLORS } from "../../theme";

export const Foot = styled.div`
  width: 100%;
  color: ${COLORS.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    margin-bottom: 18px;

    img {
      width: 58px;
    }
  }
`;

export const ImageFooter = styled.img`
  width: 230px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  img {
    width: 54px;
    height: 54px;
    margin-right: 24px;
  }

  p {
    font-size: 20px;
  }
`;

export const LocationDesc = styled.p`
  margin-left: 78px;
  font-size: 14px;
  line-height: 26px;
`;
