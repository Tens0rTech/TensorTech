import Container from "../Container";
import Title from "../Title";
import { Children, Context, Description, TextCenter } from "./style";

type SectionProps = {
  title?: string;
  description?: string;
  backgroundColor?: string;
  whiteTitle?: boolean;
  children: React.ReactNode;
};

export default function Section({
  title,
  description,
  backgroundColor,
  whiteTitle = false,
  children,
}: SectionProps) {
  return (
    <Context backgroundColor={backgroundColor}>
      <Container>
        <TextCenter>
          {title && <Title name={title} whiteTitle={whiteTitle} />}
          {description && <Description>{description}</Description>}
        </TextCenter>
        <Children>{children}</Children>
      </Container>
    </Context>
  );
}
