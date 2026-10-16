"use client";

import { useToast } from "./toast";

export function CopyButton({ value }: { value: string }) {
  const announce = useToast();

  return (
    <button
      className="copy-btn"
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          announce(`Copied: ${value}`);
        } catch {
          announce(value);
        }
      }}
    >
      Copy
    </button>
  );
}
