import { useState } from "react";
import Input from "../../../components/Input";
import Section from "../../../components/Section";
import { COLORS } from "../../../theme";
import {
  Content,
  Description,
  Flex,
  FormContainer,
  FormContent,
  FormDiv,
  Privacy,
  Title,
} from "./style";
import Button from "../../../components/Button";
import { PhoneLengthError, RequiredFieldError } from "../../../utils/error";
import { PhoneMask } from "../../../utils/masks";
import Select from "../../../components/Select";
import TextArea from "../../../components/TextArea";
import Radio from "../../../components/Radio";
import { useMutation } from "@tanstack/react-query";
import { createContact } from "../../../service/contact";
import { ContactProps } from "../../../types/contact";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact({ referance }: SectionsProps) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    contact: "whatsapp",
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

  const reasonOptions = [
    {
      label: "Consultoria tecnológica",
      value: "consultoria",
    },
    {
      label: "Análise de dados",
      value: "analise de dados",
    },
    {
      label: "Suporte técnico",
      value: "suporte",
    },
    {
      label: "Desenvolvimento de soluções",
      value: "desenvolvimento",
    },
  ];

  const contactOptions = [
    {
      label: "Whatsapp",
      value: "whatsapp",
    },
    {
      label: "E-mail",
      value: "e-mail",
    },
    {
      label: "Telefonema",
      value: "telefonema",
    },
  ];
  function onSubmit() {
    if (data.phoneNumber.length < 15) {
      setErrors((err) => ({
        ...err,
        phoneNumber: PhoneLengthError(data.phoneNumber),
      }));
      return;
    }
    onSubmitMutation.mutate(data);
  }

  const onSubmitMutation = useMutation({
    mutationKey: ["submitContact"],
    mutationFn: (data: ContactProps) => createContact(data),
    onSuccess: () => {
      setData({
        name: "",
        email: "",
        phoneNumber: "",
        reason: "",
        contact: "whatsapp",
        message: "",
      });
      toast.success("Contato enviado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao enviar contato, tente novamente");
    },
  });

  function handleChangePhoneNumber(value: string) {
    if (value.length > 15) return;
    const phone = PhoneMask(value);
    setData((d) => ({ ...d, phoneNumber: phone }));
    setErrors((err) => ({
      ...err,
      phoneNumber: RequiredFieldError(phone),
    }));
  }

  return (
    <Section backgroundColor={COLORS.GRAY} referance={referance}>
      <Flex>
        <Content>
          <Title>ENTRE EM CONTATO</Title>
          <Description>
            Entre em contato conosco, conte o que podemos te ajudar e um dos
            nossos especialistas irá atendê-lo.
          </Description>
        </Content>
        <Content>
          <FormContainer
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <FormDiv>
              <FormContent>
                <Input
                  label="Nome"
                  placeholder="Nome"
                  value={data.name}
                  onChange={(e) => {
                    setData((d) => ({ ...d, name: e.target.value }));
                    setErrors((err) => ({
                      ...err,
                      name: RequiredFieldError(e.target.value),
                    }));
                  }}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email Corporativo"
                  placeholder="Email Corporativo"
                  type="email"
                  value={data.email}
                  onChange={(e) => {
                    setData((d) => ({ ...d, email: e.target.value }));
                    setErrors((err) => ({
                      ...err,
                      email: RequiredFieldError(e.target.value),
                    }));
                  }}
                  error={errors.email}
                  required
                />
                <Input
                  label="Celular"
                  placeholder="(xx) xxxxx-xxxx"
                  type="text"
                  value={data.phoneNumber}
                  onChange={(e) => handleChangePhoneNumber(e.target.value)}
                  error={errors.phoneNumber}
                  required
                />
                <Select
                  options={reasonOptions}
                  label="Motivo do contato"
                  placeholder="Selecione um motivo"
                  required
                  value={data.reason}
                  onChange={(e) =>
                    setData((d) => ({ ...d, reason: e.target.value }))
                  }
                />
                <Radio
                  options={contactOptions}
                  label="Como prefere ser contatado?"
                  placeholder="contact"
                  value={data.contact}
                  onChange={(e) =>
                    setData((d) => ({ ...d, contact: e.target.value }))
                  }
                />
                <TextArea
                  label="Mensagem"
                  placeholder="Descreva para gente"
                  type="text"
                  value={data.message}
                  onChange={(e) =>
                    setData((d) => ({ ...d, message: e.target.value }))
                  }
                  error={errors.message}
                />
                {/* PRIVACIDADE */}
              </FormContent>
              <Privacy>
                Ao informar seus dados, você estará ciente das diretrizes da
                nossa <a href="#">Política de Privacidade</a>.
              </Privacy>
              <Button
                title="Enviar"
                type="submit"
                width="45%"
                loading={onSubmitMutation.isPending}
              />
            </FormDiv>
          </FormContainer>
        </Content>
      </Flex>
    </Section>
  );
}
