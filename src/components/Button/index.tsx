import Spinner from "../Spinner";
import { Context } from "./style";

export default function Button({
  title = "",
  secondary = false,
  click = () => null,
  width,
  type,
  loading = false,
}: ButtonProps) {
  return (
    <Context
      secondary={secondary}
      onClick={() => click()}
      width={width}
      type={type ?? "button"}
      disabled={loading}
      loading={loading}
    >
      {loading && (
        <div style={{ marginRight: 8 }}>
          <Spinner />
        </div>
      )}
      {title?.toUpperCase()}
    </Context>
  );
}
