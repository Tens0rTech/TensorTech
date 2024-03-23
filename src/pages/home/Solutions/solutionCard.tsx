import Arrow from "../../../assets/images/arrow.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardLink,
  CardLinkImage,
  CardTitle,
  ImageCard,
} from "./style";

type SolutionCard = {
  title: string;
  description: string;
  image: string;
  click?: string;
};

export default function SolutionCard({
  title,
  description,
  image,
  click = "",
}: SolutionCard) {
  return (
    <Card>
      <CardContent>
        <ImageCard src={image} alt={title} loading="lazy" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardLink to={click} target="_blank">
        SAIBA MAIS
        <CardLinkImage src={Arrow} alt={"arrow"} loading="lazy" />
      </CardLink>
    </Card>
  );
}
