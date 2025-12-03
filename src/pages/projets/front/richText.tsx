import type { ReactNode } from "react";

export function convertRichTextToJSX(text: string): ReactNode {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <>
      {lines.map((line, index) => (
        <p key={index}>{line.replace(/^-\s*/, "")}</p>
      ))}
    </>
  );
}
