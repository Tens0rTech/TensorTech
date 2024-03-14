import Button from "../Button";
import Container from "../Container";
import Title from "../Title";
import { Content, Description, Flex, ImageSection, Section } from "./style";

type BlueSectionProps = {
  title: string;
  description: string;
  buttonTitle: string;
  buttonClick: () => void;
  image?: string;
};

export default function BlueSection({
  title,
  description,
  buttonTitle,
  buttonClick,
  image,
}: BlueSectionProps) {
  return (
    <Content>
      <Container>
        <Flex>
          <Section>
            <Title name={title} whiteTitle fullWidth />
            <Description>{description}</Description>
            {image && (
              <Button
                title={buttonTitle}
                click={() => buttonClick()}
                secondary
                width={"180px"}
              />
            )}
          </Section>
          {!image ? (
            <Button
              title={buttonTitle}
              click={() => buttonClick()}
              secondary
              width={"454px"}
            />
          ) : (
            <ImageSection src={image} />
          )}
        </Flex>
      </Container>
    </Content>
  );
}
