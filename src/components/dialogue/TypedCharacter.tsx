import { motion, type Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";
import * as styles from "./dialogue.module.css";

interface TypedCharacterProps extends PropsWithChildren {
  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;
}

export const TypedCharacter = ({ children, index }: TypedCharacterProps) => {
  const characterVariants: Variants = {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: 1,
      transition: { type: "tween", duration: 0, delay: i * 0.04 },
    }),
  };

  return (
    <motion.span
      className={styles.character}
      variants={characterVariants}
      initial="initial"
      animate="animate"
      custom={index}
    >
      {children}
    </motion.span>
  );
};
