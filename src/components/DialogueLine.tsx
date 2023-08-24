import { nanoid } from "nanoid";
import React from "react";
import { TypedCharacter } from "./TypedCharacter";
import { EmphasizedCharacter } from "./EmphasizedCharacter";

export interface LineFragmentProps {
  /**
   * Text to display
   */
  text: string;

  /**
   * Animation style of the sentence fragment
   * @default "none"
   */
  style?: "wave" | "shake" | "none";
}

const LineFragment = ({ text, style }: LineFragmentProps) => {
  const words = text.split(" ");

  const renderWordsAndChars = () => {
    // Track character index separately
    // to avoid resetting the index on each word
    // for proper wave animations, etc.
    let index = 0;

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

  return <div>{renderWordsAndChars()}</div>;
};

export const DialogueLine = ({ text }: { text: string }) => {
  if (text === undefined || text.length === 0) return null;

  // Need to iterate over fragments when can parse markup
  // in order to animate sections distinctly
  return <LineFragment text={text} />;
};
