import { Variants, motion } from "framer-motion";
import React from "react";
import styles from "./dialogue.module.css";

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
      className={styles.continueWrapper}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
    >
      <motion.button
        className={styles.continueButton}
        onClick={() => {
          advance();
        }}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        aria-label="Continue"
      >
        ↓
      </motion.button>
    </motion.div>
  );
};
