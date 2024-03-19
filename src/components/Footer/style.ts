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

    @media (max-width: 1400px) {
      img {
        width: 42px;
      }
    }
  }
`;

export const ImageFooter = styled.img`
  width: 230px;
  cursor: pointer;

  @media (max-width: 1400px) {
    width: calc(230px * 0.7);
  }
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

  @media (max-width: 1400px) {
    img {
      width: 42px;
      height: 42px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const LocationDesc = styled.p`
  margin-left: 78px;
  font-size: 14px;
  line-height: 26px;

  @media (max-width: 1400px) {
    margin-left: 62px;
  }
`;
