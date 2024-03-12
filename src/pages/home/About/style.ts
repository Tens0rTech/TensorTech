import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../theme";

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 308px 308px 308px 308px;
  gap: 16px;
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

export const CardLink = styled.a`
  color: ${COLORS.SECONDARY};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const CardLinkImage = styled.img`
  margin-left: 10px;
`;
