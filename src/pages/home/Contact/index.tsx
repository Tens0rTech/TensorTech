import { useState } from "react";
import Input from "../../../components/Input";
import Section from "../../../components/Section";
import { COLORS } from "../../../theme";
import { Content, Description, Flex, FormDiv, Title } from "./style";
import Button from "../../../components/Button";
import { EmailErrors, NameErrors } from "../../../components/Input/errors";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    contact: "",
    message: "",
  });

  function onSubmit() {
    console.log(data);
  }

  return (
    <Section backgroundColor={COLORS.GRAY}>
      <Flex>
        <Content>
          <Title>ENTRE EM CONTATO</Title>
          <Description>
            Entre em contato conosco, conte o que podemos te ajudar e um dos
            nossos especialistas irá atendê-lo.
          </Description>
        </Content>
        <Content>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <FormDiv>
              <Input
                label="Nome*"
                placeholder="Nome"
                value={data.name}
                onChange={(e) => {
                  setData((d) => ({ ...d, name: e.target.value }));
                  setErrors((err) => ({
                    ...err,
                    name: NameErrors(e.target.value),
                  }));
                }}
                error={errors.name}
                required
              />
              <Input
                label="Email Corporativo*"
                placeholder="Email Corporativo"
                type="email"
                value={data.email}
                onChange={(e) => {
                  setData((d) => ({ ...d, email: e.target.value }));
                  setErrors((err) => ({
                    ...err,
                    email: EmailErrors(e.target.value),
                  }));
                }}
                error={errors.email}
                required
              />
              <div style={{ marginTop: 12 }}>
                <Button title="Enviar" type="submit" />
              </div>
            </FormDiv>
          </form>
        </Content>
      </Flex>
    </Section>
  );
}
