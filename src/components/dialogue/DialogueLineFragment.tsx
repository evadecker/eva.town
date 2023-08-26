import React, { Fragment, PropsWithChildren } from "react";
import { nanoid } from "nanoid";
import styles from "./dialogue.module.css";
import { Variants, motion } from "framer-motion";

export enum FragmentAnimationVariant {
  Wave = "wave",
  Shake = "shake",
  None = "none",
}

interface TypedCharacterProps extends PropsWithChildren {
  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;

  /**
   * Speed to display characters
   * @default 0.04
   */
  speed?: number;

  /**
   * Amount to delay the initial typing sequence
   * @default 0.2
   */
  delay?: number;
}

const TypedCharacter = ({
  children,
  index,
  speed = 0.04,
  delay = 0.2,
}: TypedCharacterProps) => {
  return (
    <motion.span
      className={styles.character}
      style={{ animationDelay: `${index * speed + delay}s` }}
    >
      {children}
    </motion.span>
  );
};

interface EmphasizedCharacterProps extends PropsWithChildren {
  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;

  /**
   * Animation style of the character
   * @default "none"
   */
  variant?: FragmentAnimationVariant;
}

const EmphasizedCharacter = ({
  children,
  variant = FragmentAnimationVariant.None,
  index,
}: EmphasizedCharacterProps) => {
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
    initial: { y: "-0.12em" },
    animate: (i) => ({
      y: "0.12em",
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

  const getVariantObject = (variant?: FragmentAnimationVariant) => {
    switch (variant) {
      case FragmentAnimationVariant.Shake:
        return shakeVariants;
      case FragmentAnimationVariant.Wave:
        return waveVariants;
      default:
        return undefined;
    }
  };

  return (
    <motion.strong
      className={styles.emphasizedCharacter}
      variants={getVariantObject(variant)}
      initial="initial"
      animate="animate"
      custom={index}
    >
      {children}
    </motion.strong>
  );
};

export interface DialogueLineFragmentProps {
  /**
   * Text to display
   */
  text: string;

  /**
   * Animation style of the sentence fragment
   * @default "none"
   */
  variant?: FragmentAnimationVariant;

  /**
   * Starting character index for continuous animation
   * across line fragments and styles
   * @default 0
   */
  index?: number;

  /**
   * Speed to display characters
   * @default 0.04
   */
  speed?: number;
}

export const DialogueLineFragment = ({
  text,
  variant,
  index = 0,
  speed = 0.04,
}: DialogueLineFragmentProps) => {
  const words = text.split(" ");

  const isEmphasized = !(
    variant === undefined || variant === FragmentAnimationVariant.None
  );

  return words.map((word, wordIndex) => (
    <span className={styles.word} key={nanoid()}>
      {word.split("").map((char) => {
        return (
          <TypedCharacter key={nanoid()} index={index++} speed={speed}>
            {isEmphasized ? (
              <EmphasizedCharacter variant={variant} index={index}>
                {char}
              </EmphasizedCharacter>
            ) : (
              <>{char}</>
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
