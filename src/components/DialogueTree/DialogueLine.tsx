import classNames from "classnames";
import { nanoid } from "nanoid";
import type * as YarnBound from "yarn-bound";

import * as styles from "./dialogue.css";
import {
  DialogueLineFragment,
  type DialogueLineFragmentProps,
  type FragmentVariant,
} from "./DialogueLineFragment";

interface DialogueLineProps {
  /**
   * YarnSpinner node to display.
   */
  node: YarnBound.TextResult | YarnBound.OptionsResult;
}

export const DialogueLine = ({ node }: DialogueLineProps) => {
  if (node === undefined || node === null) return null;

  const isBig = node?.hashtags?.includes("big");

  function extractFragmentsWithNames(
    markupArray: YarnBound.Markup[],
    text: string
  ): DialogueLineFragmentProps[] {
    const trimmedText = text.trim();
    const fragments: DialogueLineFragmentProps[] = [];

    let currentPosition = 0;

    for (const markup of markupArray) {
      if (markup.position !== undefined && markup.length !== undefined) {
        const preMarkupText = trimmedText.slice(
          currentPosition,
          markup.position
        );

        if (preMarkupText !== "") {
          fragments.push({
            text: preMarkupText,
            index: currentPosition,
          });
        }

        const markupText = trimmedText.slice(
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

    if (currentPosition < trimmedText.length) {
      const remainingText = trimmedText.slice(currentPosition);
      fragments.push({ text: remainingText, index: currentPosition });
    }

    return fragments;
  }

  return (
    <div
      className={classNames(styles.line, {
        [styles.big]: isBig,
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
