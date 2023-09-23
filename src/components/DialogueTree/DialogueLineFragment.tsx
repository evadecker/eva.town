import { motion, type Variants } from "framer-motion";
import { nanoid } from "nanoid";

import styles from "./dialogue.module.scss";

export enum FragmentVariant {
  Wave = "wave",
  Shake = "shake",
  None = "none",
}

interface TypedCharacterProps {
  /**
   * Character to render
   */
  character: string;

  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;

  /**
   * Speed to display characters
   * @default 0.03
   */
  speed?: number;

  /**
   * Amount to delay the initial typing sequence
   * @default 0.2
   */
  delay?: number;

  /**
   * Animation style of the character
   * @default "none"
   */
  variant?: FragmentVariant;
}

const TypedCharacter = ({
  character,
  index,
  speed = 0.03,
  delay = 0.2,
  variant = FragmentVariant.None,
}: TypedCharacterProps) => {
  const isEmphasized = variant !== FragmentVariant.None;

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

  const characterVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * speed + delay,
      },
    },
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

  const getVariantObject = (variant?: FragmentVariant) => {
    switch (variant) {
      case FragmentVariant.Shake:
        return shakeVariants;
      case FragmentVariant.Wave:
        return waveVariants;
      default:
        return undefined;
    }
  };

  return (
    <motion.span
      className={styles.character}
      variants={characterVariants}
      // style={{ animationDelay: `${index * speed + delay}s` }}
    >
      {isEmphasized ? (
        <motion.strong
          className={styles.emphasized}
          variants={getVariantObject(variant)}
          initial="initial"
          animate="animate"
          custom={index}
        >
          {character}
        </motion.strong>
      ) : (
        <>{character}</>
      )}
    </motion.span>
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
  variant?: FragmentVariant;

  /**
   * Starting character index for continuous animation
   * across line fragments and styles
   * @default 0
   */
  index?: number;

  /**
   * Speed to display characters
   * @default 0.03
   */
  speed?: number;
}

export const DialogueLineFragment = ({
  text,
  variant,
  index = 0,
  speed = 0.03,
}: DialogueLineFragmentProps) => {
  const words = text.split(" ");

  return words.map((word, wordIndex) => (
    <span className={styles.word} key={nanoid()}>
      {word.split("").map((char) => {
        return (
          <TypedCharacter
            key={nanoid()}
            character={char}
            variant={variant}
            index={index++}
            speed={speed}
          />
        );
      })}
      {wordIndex < words.length - 1 && (
        <TypedCharacter key={nanoid()} character=" " index={index++} />
      )}
    </span>
  ));
};
