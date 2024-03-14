import { Context } from "./style";

type TitleProps = {
  name: string;
  whiteTitle: boolean;
  fullWidth?: boolean;
};

export default function Title({
  name,
  whiteTitle = false,
  fullWidth = false,
}: TitleProps) {
  return (
    <Context whiteTitle={whiteTitle} fullWidth={fullWidth}>
      {fullWidth ? name : name.toUpperCase()}
    </Context>
  );
}
