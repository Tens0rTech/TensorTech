import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../theme";
import { Link } from "react-router-dom";

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 308px 308px 308px 308px;
  gap: 16px;

  @media (max-width: 1400px) {
    grid-template-columns: 48% 48%;
    gap: 4%;
  }

  @media (max-width: 950px) {
    grid-template-columns: 100%;
    gap: 18px;
  }
`;

export const Card = styled.div`
  border: 1px solid ${COLORS.SECONDARY};
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  transition: 0.4s all;

  &:hover {
    transition: 0.4s all;
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 12px;
  height: 328px;

  @media (max-width: 1400px) {
    height: calc(328px * 0.7);
  }

  @media (max-width: 950px) {
    height: auto;
  }
`;

export const ImageCard = styled.img`
  width: 40px;
  height: 40px;
`;

export const CardTitle = styled.p`
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  margin: 12px 0;
  font-size: 20px;
`;

export const CardDescription = styled.p`
  line-height: 24px;
  font-size: 14px;
`;

export const CardLink = styled(Link)`
  color: ${COLORS.SECONDARY};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px;
  text-decoration: none;
`;

export const CardLinkImage = styled.img`
  margin-left: 10px;
`;
