import React from "react";
import type { OptionsResult } from "yarn-bound";
import styles from "./dialogue.module.css";

interface DialogueOptionsProps {
  node: OptionsResult;
  advance: (step?: number) => void;
}

export const DialogueOptions = ({ node, advance }: DialogueOptionsProps) => {
  return (
    <ol className={styles.optionsList}>
      {node.options.map((option, index) => (
        <li className={styles.optionsListItem} key={index}>
          <button
            className={styles.optionButton}
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
