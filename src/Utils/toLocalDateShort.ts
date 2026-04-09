export default function toLocalDateShort(date: string | number | Date) {
  return new Date(date).toLocaleDateString("fa-IR");
}
