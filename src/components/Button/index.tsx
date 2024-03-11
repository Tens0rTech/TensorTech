import { Context } from "./style";

export default function Button({ title = "", secondary = false }: ButtonProps) {
  return <Context secondary={secondary}>{title?.toUpperCase()}</Context>;
}
