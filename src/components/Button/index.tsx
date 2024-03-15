import { Context } from "./style";

export default function Button({
  title = "",
  secondary = false,
  click = () => null,
  width,
  type,
}: ButtonProps) {
  return (
    <Context
      secondary={secondary}
      onClick={() => click()}
      width={width}
      type={type ?? "button"}
    >
      {title?.toUpperCase()}
    </Context>
  );
}
