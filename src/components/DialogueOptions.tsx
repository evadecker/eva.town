import React from "react";
import type { OptionsResult } from "yarn-bound";

interface DialogueOptionsProps {
  advance: (step?: number) => void;
  options?: OptionsResult;
}

export const DialogueOptions = ({ options, advance }: DialogueOptionsProps) => {
  if (!options)
    return (
      <button
        onClick={() => {
          advance();
        }}
      >
        Next
      </button>
    );

  return (
    <>
      {options.options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            advance(index);
          }}
        >
          {option.text}
        </button>
      ))}
    </>
  );
};
