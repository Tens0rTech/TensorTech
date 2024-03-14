import { Context } from "./style";

export default function Button({
  title = "",
  secondary = false,
  click = () => null,
  width,
}: ButtonProps) {
  return (
    <Context secondary={secondary} onClick={() => click()} width={width}>
      {title?.toUpperCase()}
    </Context>
  );
}
