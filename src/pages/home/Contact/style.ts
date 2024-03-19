import { styled } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../theme";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 50%;

  @media (max-width: 1400px) {
    width: 40%;
  }
`;

export const ContentForm = styled.div`
  width: 60%;
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
`;

export const Privacy = styled.p`
  margin-bottom: 22px;

  a {
    color: #000;
  }
`;
