import { motion, type Variants } from "framer-motion";
import type * as YarnBound from "yarn-bound";

import * as styles from "./dialogue.css";

interface DialogueOptionsProps {
  node: YarnBound.OptionsResult;
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

  return (
    <motion.div className={styles.options}>
      {node.options.map((option, index) => (
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          className={styles.option}
          key={index}
          onClick={() => {
            advance(index);
          }}
        >
          {option.text}
        </motion.button>
      ))}
    </motion.div>
  );
};
