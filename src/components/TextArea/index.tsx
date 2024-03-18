import { InputProps } from "../../types/input";
import FormGroup from "../FormGroup";

export default function TextArea({
  value,
  onChange,
  label,
  placeholder,
  error,
  required = false,
}: InputProps) {
  return (
    <FormGroup>
      <h5>
        {label}
        {required && " *"}
      </h5>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
        rows={5}
      ></textarea>
      {error && <p>{error}</p>}
    </FormGroup>
  );
}
