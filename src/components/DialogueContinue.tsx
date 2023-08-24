import React from "react";

interface DialogueContinueProps {
  advance: () => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => (
  <button
    onClick={() => {
      advance();
    }}
  >
    Continue
  </button>
);
