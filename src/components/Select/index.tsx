import { InputProps } from "../../types/input";
import FormGroup from "../FormGroup";

type SelectProps = InputProps & {
  options: { label: string; value: string }[];
};

export default function Select({
  label,
  required = false,
  options,
  value,
  onChange,
  error,
  placeholder,
}: SelectProps) {
  return (
    <FormGroup>
      <h5>
        {label}
        {required && " *"}
      </h5>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
        style={{ color: value === "" ? "gray" : "#000" }}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
    </FormGroup>
  );
}
