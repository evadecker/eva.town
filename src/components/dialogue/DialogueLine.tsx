import { nanoid } from "nanoid";
import React from "react";
import type { Markup, OptionsResult, TextResult } from "yarn-bound";
import {
  DialogueLineFragment,
  type DialogueLineFragmentProps,
  type EmphasisVariant,
} from "./";
import * as styles from "./dialogue.module.css";

interface DialogueLineProps {
  /**
   * YarnSpinner node to display.
   */
  node: TextResult | OptionsResult;

  /**
   * Display large text.
   * @default false
   */
  isBig?: boolean;
}

export const DialogueLine = ({ node, isBig }: DialogueLineProps) => {
  if (!node) return null;

  function extractFragmentsWithNames(
    markupArray: Markup[],
    inputText: string
  ): DialogueLineFragmentProps[] {
    const fragments: DialogueLineFragmentProps[] = [];

    let currentPosition = 0;

    for (const markup of markupArray) {
      if (markup.position !== undefined && markup.length !== undefined) {
        const preMarkupText = inputText.slice(currentPosition, markup.position);
        fragments.push({
          text: preMarkupText,
          index: currentPosition,
        });

        const markupText = inputText.slice(
          markup.position,
          markup.position + markup.length
        );
        fragments.push({
          text: markupText,
          variant: markup.name as EmphasisVariant,
          index: markup.position,
        });

        currentPosition = markup.position + markup.length;
      }
    }

    if (currentPosition < inputText.length) {
      const remainingText = inputText.slice(currentPosition);
      fragments.push({ text: remainingText, index: currentPosition });
    }

    return fragments;
  }

  return (
    <div className={`${styles.line} ${isBig && styles.bigLine}`}>
      {node.text &&
        extractFragmentsWithNames(node.markup, node.text).map(
          ({ text, variant, index }) => (
            <DialogueLineFragment
              key={nanoid()}
              text={text}
              variant={variant}
              index={index}
            />
          )
        )}
    </div>
  );
};
