import Container from "../Container";
import Title from "../Title";
import { Content, Text } from "./style";

type ContextText = {
  title: string;
  children: React.ReactNode;
};

export default function ContentText({ title, children }: ContextText) {
  return (
    <Content>
      <Container>
        <div style={{ textAlign: "center" }}>
          <Title name={title} fullWidth />
        </div>
        <Text>{children}</Text>
      </Container>
    </Content>
  );
}
