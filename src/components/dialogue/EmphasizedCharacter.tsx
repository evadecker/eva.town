import { motion, type Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { FragmentAnimationStyle } from "./";

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
  style?: FragmentAnimationStyle;
}

export const EmphasizedCharacter = ({
  children,
  style = FragmentAnimationStyle.None,
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
        fontWeight: style !== "none" ? 700 : 400,
      }}
      custom={index}
    >
      {children}
    </motion.span>
  );
};
