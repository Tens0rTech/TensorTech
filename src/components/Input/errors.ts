export function NameErrors(value: string) {
  if (value === "") return "Nome é obrigatório";
  return "";
}

export function EmailErrors(value: string) {
  if (value === "") {
    return "E-mail obrigatório";
  }

  return "";
}
