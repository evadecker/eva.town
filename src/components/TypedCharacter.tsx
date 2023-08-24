import { motion, type Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface TypedCharacterProps extends PropsWithChildren {
  /**
   * Index of the character to be rendered
   * to stagger animations
   */
  index: number;
}

export const TypedCharacter = ({ children, index }: TypedCharacterProps) => {
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
