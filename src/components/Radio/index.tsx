import { InputProps } from "../../types/input";
import FormGroup from "../FormGroup";
import { RadioBox } from "./style";

type RadioProps = InputProps & {
  options: { label: string; value: string }[];
};

export default function Radio({
  label,
  required = false,
  error,
  options,
  value,
  onChange,
  placeholder,
}: RadioProps) {
  return (
    <FormGroup>
      <h5>
        {label}
        {required && " *"}
      </h5>
      {options.map((opt, index) => (
        <RadioBox>
          <input
            key={index}
            type="radio"
            value={opt.value}
            id={opt.value}
            name={placeholder}
            checked={opt.value === value}
            onClick={(e) => onChange(e)}
          />
          <label htmlFor={opt.value}>{opt.label}</label>
        </RadioBox>
      ))}
      {error && <p>{error}</p>}
    </FormGroup>
  );
}
