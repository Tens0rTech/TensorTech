import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../theme";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 50%;

  @media (max-width: 1400px) {
    width: 40%;
  }

  @media (max-width: 950px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContentForm = styled.div`
  width: 60%;

  @media (max-width: 950px) {
    width: 100%;
    margin-top: 32px;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${COLORS.PRIMARY};

  @media (max-width: 1400px) {
    font-size: 26px;
  }
`;

export const Description = styled.p`
  width: 75%;
  margin-top: 24px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  border-radius: 30px;
  background-color: ${COLORS.WHITE};
`;

export const FormDiv = styled.div`
  padding: 22px 24px;
`;

export const FormContent = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: auto auto;
  padding-bottom: 22px;

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export const Privacy = styled.p`
  margin-bottom: 22px;

  a {
    color: #000;
  }
`;
