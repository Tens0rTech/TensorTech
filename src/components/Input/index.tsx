import { InputProps } from "../../types/input";
import FormGroup from "../FormGroup";

export default function Input({
  value,
  onChange,
  label,
  placeholder,
  error,
  type = "text",
  required = false,
}: InputProps) {
  return (
    <FormGroup>
      {label && (
        <label htmlFor={label}>
          {label}
          {required && " *"}
        </label>
      )}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
      />
      {error && <p>{error}</p>}
    </FormGroup>
  );
}
