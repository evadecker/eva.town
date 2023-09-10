import classNames from "classnames";
import { nanoid } from "nanoid";
import type { Markup, OptionsResult, TextResult } from "yarn-bound";

import styles from "./dialogue.module.css";
import {
  DialogueLineFragment,
  type DialogueLineFragmentProps,
  type FragmentVariant,
} from "./DialogueLineFragment";

interface DialogueLineProps {
  /**
   * YarnSpinner node to display.
   */
  node: TextResult | OptionsResult;
}

export const DialogueLine = ({ node }: DialogueLineProps) => {
  const isBig = node.hashtags.includes("big");
  const currentSpeaker = node.markup.find((m) => m.name === "character")
    ?.properties?.name;

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
          variant: markup.name as FragmentVariant,
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
    <div
      className={classNames(styles.line, {
        [styles.big]: isBig,
        [styles.sam - text]: currentSpeaker === "Sam",
        [styles.eva - text]: currentSpeaker === "Eva",
      })}
    >
      {node.text != null &&
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
