import React, { Fragment } from "react";
import { TypedCharacter } from "./TypedCharacter";
import { nanoid } from "nanoid";
import { EmphasizedCharacter } from "./EmphasizedCharacter";
import styles from "./dialogue.module.css";

export enum FragmentAnimationStyle {
  Wave = "wave",
  Shake = "shake",
  None = "none",
}

export interface DialogueLineFragmentProps {
  /**
   * Text to display
   */
  text: string;

  /**
   * Animation style of the sentence fragment
   * @default "none"
   */
  style?: FragmentAnimationStyle;

  /**
   * Starting character index for continuous animation
   * across line fragments and styles
   * @default 0
   */
  index?: number;
}

export const DialogueLineFragment = ({
  text,
  style,
  index = 0,
}: DialogueLineFragmentProps) => {
  const words = text.split(" ");

  const renderWordsAndChars = () => {
    return words.map((word, wordIndex) => (
      <span className={styles.word} key={nanoid()}>
        {word.split("").map((char) => {
          return (
            <TypedCharacter key={nanoid()} index={index++}>
              {style === undefined || style === FragmentAnimationStyle.None ? (
                <>{char}</>
              ) : (
                <EmphasizedCharacter style={style} index={index}>
                  {char}
                </EmphasizedCharacter>
              )}
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
