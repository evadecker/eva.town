import { Variants, motion } from "framer-motion";
import React from "react";

interface DialogueContinueProps {
  advance: () => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => {
  const wrapperVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -5,
      transition: {
        type: "tween",
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      style={{
        width: "24px",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <motion.button
        onClick={() => {
          advance();
        }}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        aria-label="Continue"
        style={{
          background: "none",
          border: "none",
          fontSize: "1em",
        }}
      >
        ↓
      </motion.button>
    </motion.div>
  );
};
