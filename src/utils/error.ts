export function RequiredFieldError(value: string) {
  if (value === "") return "Campo obrigatório";
  return "";
}

export function PhoneLengthError(value: string) {
  if (value.length !== 15) return "Celular no formato inválido";
  return "";
}
