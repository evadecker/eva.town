import React from "react";
import type { OptionsResult } from "yarn-bound";
import { DialogueLine } from "./DialogueLine";

interface DialogueOptionsProps {
  node: OptionsResult;
  advance: (step?: number) => void;
}

export const DialogueOptions = ({ node, advance }: DialogueOptionsProps) => {
  return (
    <>
      {node.text !== undefined && <DialogueLine node={node as any} />}
      {node.options.map((option, index) => (
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
