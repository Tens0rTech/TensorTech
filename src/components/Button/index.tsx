import { Context } from "./style";

export default function Button({
  title = "",
  secondary = false,
  click = () => null,
}: ButtonProps) {
  return (
    <Context secondary={secondary} onClick={() => click()}>
      {title?.toUpperCase()}
    </Context>
  );
}
