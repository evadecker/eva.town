import React from "react";

interface DialogueContinueProps {
  advance: () => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => (
  <button
    onClick={() => {
      advance();
    }}
    aria-label="Continue"
    style={{
      background: "none",
      border: "none",
      color: "white",
      fontSize: "1em",
    }}
  >
    ↓
  </button>
);
