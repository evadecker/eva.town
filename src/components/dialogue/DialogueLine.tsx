import { nanoid } from "nanoid";
import React from "react";
import type { Markup, OptionsResult, TextResult } from "yarn-bound";
import {
  DialogueLineFragment,
  type DialogueLineFragmentProps,
  type FragmentAnimationStyle,
} from "./";
import * as styles from "./dialogue.module.css";

interface DialogueLineProps {
  node: TextResult | OptionsResult;
}

export const DialogueLine = ({ node }: DialogueLineProps) => {
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
          style: markup.name as FragmentAnimationStyle,
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
    <div className={styles.line}>
      {node.text &&
        extractFragmentsWithNames(node.markup, node.text).map(
          ({ text, style, index }) => (
            <DialogueLineFragment
              key={nanoid()}
              text={text}
              style={style}
              index={index}
            />
          )
        )}
    </div>
  );
};
