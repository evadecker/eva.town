import { Variants, motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { PropsWithChildren, useEffect } from "react";
import { render } from "react-dom";

interface CharacterProps extends PropsWithChildren {
  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;
}

const Character = ({ children, index }: CharacterProps) => {
  const characterVariants: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", mass: 0.5, damping: 10, delay: i * 0.03 },
    }),
  };

  return (
    <motion.span
      // Preserve spaces
      style={{ display: "inline-block", whiteSpace: "pre" }}
      className="char"
      variants={characterVariants}
      initial="initial"
      animate="animate"
      custom={index}
    >
      {children}
    </motion.span>
  );
};

interface EmphasisProps extends PropsWithChildren {
  style: LineFragmentProps["style"];

  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;
}

const Emphasis = ({ children, style, index }: EmphasisProps) => {
  const generateRandomValuesArray = (
    num: number,
    min: number,
    max: number
  ): number[] => {
    const randomNumberBetweenValues = (): number => {
      return Math.random() * (max - min) + min;
    };

    return [...Array(num)].map(randomNumberBetweenValues);
  };

  const generateRandomEmsArray = (
    num: number,
    min: number,
    max: number
  ): string[] => {
    return generateRandomValuesArray(num, min, max).map((i) => i + "em");
  };

  const shakeVariants: Variants = {
    initial: (i) => ({
      x: 0,
      // Alternate heights
      y: i % 2 === 0 ? "0.03em" : "-0.03em",
      // Alternate rotation
      rotate: i % 2 === 0 ? 5 : -5,
    }),
    animate: (i) => ({
      x: generateRandomEmsArray(10, -0.05, 0.05),
      y: generateRandomEmsArray(10, -0.1, 0.1),
      rotate: generateRandomValuesArray(10, 10, -10),
      transition: {
        type: "tween",
        repeat: Infinity,
        repeatType: "mirror",
        ease: "anticipate",
        delay: -i,
        duration: 1,
      },
    }),
  };

  const waveVariants: Variants = {
    initial: { y: "-0.1em" },
    animate: (i) => ({
      y: "0.1em",
      transition: {
        type: "tween",
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
        delay: -i * 0.05,
        duration: 0.8,
      },
    }),
  };

  return (
    <motion.span
      variants={
        style === "shake" ? shakeVariants : style === "wave" ? waveVariants : {}
      }
      initial="initial"
      animate="animate"
      style={{
        display: "inline-block",
        fontWeight: "bold",
      }}
      custom={index}
    >
      {children}
    </motion.span>
  );
};

interface LineFragmentProps {
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
            <Character key={nanoid()} index={index++}>
              <Emphasis style={style} index={index}>
                {char}
              </Emphasis>
            </Character>
          );
        })}
        {wordIndex < words.length - 1 && (
          <Character key={nanoid()} index={index++}>
            {" "}
          </Character>
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
