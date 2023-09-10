import { motion, type Variants } from "framer-motion";
import type { OptionsResult } from "yarn-bound";

import styles from "./dialogue.module.css";

interface DialogueOptionsProps {
  node: OptionsResult;
  advance: (step?: number) => void;
}

export const DialogueOptions = ({ node, advance }: DialogueOptionsProps) => {
  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  const arrowVariants: Variants = {
    initial: {
      opacity: 0,
      width: 0,
    },
    whileHover: {
      opacity: 1,
      width: "1em",
    },
  };

  return (
    <motion.div className={styles.optionsList}>
      {node.options.map((option, index) => (
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          className={styles.optionButton}
          key={index}
          onClick={() => {
            advance(index);
          }}
        >
          <motion.span variants={arrowVariants} className={styles.optionArrow}>
            →
          </motion.span>
          {option.text}
        </motion.button>
      ))}
    </motion.div>
  );
};
