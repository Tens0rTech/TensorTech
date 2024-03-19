import { useState } from "react";
import BlueSection from "../../../components/BlueSection";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useMutation } from "@tanstack/react-query";
import { createNewsletter } from "../../../service/newsletter";
import { NewsBox } from "./style";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [data, setData] = useState("");

  function onSubmit() {
    if (data === "") return;
    createNewsletterMutation.mutate();
  }

  const createNewsletterMutation = useMutation({
    mutationKey: ["createNewsletterMutation"],
    mutationFn: () => createNewsletter(data),
    onSuccess: () => {
      setData("");
      toast.success("Você foi inscrito com sucesso");
    },
    onError: () => {
      toast.error("Erro ao se inscrever, tente novamente");
    },
  });

  return (
    <NewsBox>
      <BlueSection
        title="Inscreva-se em nossa newsletter"
        description="e receba as principais tendências em tecnologia."
      >
        <div style={{ width: 410 }}>
          <Input
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <br />
          <Button
            title="cadastre-se"
            width="100%"
            secondary
            click={() => onSubmit()}
            loading={createNewsletterMutation.isPending}
          />
        </div>
      </BlueSection>
    </NewsBox>
  );
}
