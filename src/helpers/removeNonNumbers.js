export default function removeNonNumbers(string) {
  return string.replaceAll(/\D/g, "");
}
