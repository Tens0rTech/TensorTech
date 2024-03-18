export function PhoneMask(value: string) {
  return value
    .replace(/[^\d]/g, "")
    .replace(/^(\d\d)(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
