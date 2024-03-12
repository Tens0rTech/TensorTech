import { Context } from "./style";

type TitleProps = {
  name: string;
  whiteTitle: boolean;
};

export default function Title({ name, whiteTitle = false }: TitleProps) {
  return <Context whiteTitle={whiteTitle}>{name.toUpperCase()}</Context>;
}
