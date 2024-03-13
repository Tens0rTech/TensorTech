import { CardNumber } from "./style";

type AboutCardProps = {
  color: string;
  number: number;
  text: string;
  little?: boolean;
};

export default function AboutCard({
  color,
  number,
  text,
  little = false,
}: AboutCardProps) {
  return (
    <CardNumber textColor={color} little={little}>
      <h3>+{number}</h3>
      <p>{text.toUpperCase()}</p>
    </CardNumber>
  );
}
