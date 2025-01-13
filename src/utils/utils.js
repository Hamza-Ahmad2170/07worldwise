export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function environment() {
  if (import.meta.env.mode === "development") {
    return "http://localhost:9000";
  }
  return import.meta.env.VITE_API_URL;
}
