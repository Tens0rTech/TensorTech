import { InputGroup } from "./style";

type InputProps = {
  value: string;
  onChange: (e: any) => void;
  label: string;
  placeholder: string;
  error?: string;
  type?: string;
  required?: boolean;
};

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
    <InputGroup>
      <h5>{label}</h5>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
      />
      {error && <p>{error}</p>}
    </InputGroup>
  );
}
