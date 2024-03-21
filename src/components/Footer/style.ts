import { styled } from "styled-components";
import { COLORS } from "../../theme";

export const Foot = styled.div`
  width: 100%;
  color: ${COLORS.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
  }
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

    @media (max-width: 1370px) {
      img {
        width: 42px;
      }
    }

    @media (max-width: 600px) {
      margin-bottom: 0px;
      margin: 0 8px;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 18px;

    &.social-medias {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const ImageFooter = styled.img`
  width: 230px;
  cursor: pointer;

  @media (max-width: 1370px) {
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

  @media (max-width: 1370px) {
    img {
      width: 42px;
      height: 42px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 8px;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export const LocationDesc = styled.p`
  margin-left: 78px;
  font-size: 14px;
  line-height: 26px;

  @media (max-width: 1370px) {
    margin-left: 62px;
  }
`;

export const CopyRight = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  background-color: ${COLORS.LIGHT_BLUE};
  color: ${COLORS.WHITE};
  padding: 4px 0;
`;
