import { motion, type Variants } from "framer-motion";

import styles from "./dialogue.module.css";

interface DialogueContinueProps {
  advance: () => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => {
  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  const arrowVariants: Variants = {
    initial: {
      y: -2,
    },
    animate: {
      y: 3,
      transition: {
        type: "spring",
        repeat: Infinity,
        repeatType: "reverse",
        bounce: 0.5,
      },
    },
  };

  return (
    <motion.button
      className={styles.continue - button}
      variants={buttonVariants}
      onClick={() => {
        advance();
      }}
      initial="initial"
      animate="animate"
    >
      <motion.svg
        className={styles.continue - arrow}
        variants={arrowVariants}
        aria-label="Continue"
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z"
          fill="currentColor"
        />
      </motion.svg>
    </motion.button>
  );
};
