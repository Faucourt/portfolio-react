export function useRichText(text: string) {
  const html = text
    .split("\n")
    .map(line => {
      if (line.startsWith("- ")) return `<li>${line.substring(2)}</li>`;
      if (line.trim() === "") return "<br/>";
      return `<p>${line}</p>`;
    })
    .join("");

  return { __html: html };
}
