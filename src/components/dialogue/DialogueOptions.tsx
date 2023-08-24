import React from "react";
import type { OptionsResult } from "yarn-bound";

interface DialogueOptionsProps {
  node: OptionsResult;
  advance: (step?: number) => void;
}

export const DialogueOptions = ({ node, advance }: DialogueOptionsProps) => {
  return (
    <ol style={{ margin: 0, padding: 0 }}>
      {node.options.map((option, index) => (
        <li style={{ listStyle: "none", margin: 0 }}>
          <button
            style={{ fontSize: "1em" }}
            key={index}
            onClick={() => {
              advance(index);
            }}
          >
            → {option.text}
          </button>
        </li>
      ))}
    </ol>
  );
};
