import { Content } from "./style";

export type SpinnerProps = {
  wh?: number;
};

export default function Spinner({ wh = 18 }: SpinnerProps) {
  return <Content wh={wh}></Content>;
}
