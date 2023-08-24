import { nanoid } from "nanoid";
import React from "react";
import { TypedCharacter, EmphasizedCharacter } from "./";
import type { Markup, TextResult } from "yarn-bound";

export enum AnimationStyle {
  Wave = "wave",
  Shake = "shake",
  None = "none",
}

export interface LineFragmentProps {
  /**
   * Text to display
   */
  text: string;

  /**
   * Animation style of the sentence fragment
   * @default "none"
   */
  style?: AnimationStyle;

  /**
   * Starting character index for continuous animation
   * across line fragments and styles
   * @default 0
   */
  index?: number;
}

const LineFragment = ({ text, style, index = 0 }: LineFragmentProps) => {
  const words = text.split(" ");

  const renderWordsAndChars = () => {
    return words.map((word, wordIndex) => (
      <span className="word" style={{ display: "inline-block" }} key={nanoid()}>
        {word.split("").map((char) => {
          return (
            <TypedCharacter key={nanoid()} index={index++}>
              <EmphasizedCharacter style={style} index={index}>
                {char}
              </EmphasizedCharacter>
            </TypedCharacter>
          );
        })}
        {wordIndex < words.length - 1 && (
          <TypedCharacter key={nanoid()} index={index++}>
            {" "}
          </TypedCharacter>
        )}
      </span>
    ));
  };

  return renderWordsAndChars();
};

export const DialogueLine = ({ node }: { node: TextResult }) => {
  if (!node) return null;

  function extractFragmentsWithNames(
    markupArray: Markup[],
    inputText: string
  ): LineFragmentProps[] {
    const fragments: LineFragmentProps[] = [];

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
          style: markup.name as AnimationStyle,
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
    <>
      {extractFragmentsWithNames(node.markup, node.text).map(
        ({ text, style, index }) => (
          <LineFragment
            key={nanoid()}
            text={text}
            style={style}
            index={index}
          />
        )
      )}
    </>
  );
};
