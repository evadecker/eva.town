import "./dialogue.css";

import { motion, type Variants } from "motion/react";
import React from "react";

import { DialogueLine } from "./DialogueLine";

interface DialogueBubbleProps {
  text: string | null;
}

export const DialogueBubble = React.memo(({ text }: DialogueBubbleProps) => {
  const bubbleVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: -20,
      y: 20,
      borderRadius: "1rem 1rem 0.2rem 1rem",
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        mass: 1,
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    text && (
      <motion.div
        layout
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="bubble"
      >
        <DialogueLine text={text} />
      </motion.div>
    )
  );
});
