import { motion, type Variants } from "framer-motion";
import * as YarnBound from "yarn-bound";

import styles from "./dialogue.module.scss";
import { DialogueContinue } from "./DialogueContinue";
import { DialogueLine } from "./DialogueLine";
import { DialogueOptions } from "./DialogueOptions";

interface DialogueBubbleProps {
  /**
   * YarnSpinner node to display.
   */
  node: YarnBound.TextResult | YarnBound.OptionsResult;

  advance: (optionIndex: number | undefined) => void;
}

export const DialogueBubble = ({ node, advance }: DialogueBubbleProps) => {
  const bubbleVariants: Variants = {
    initial: {
      borderRadius: 16,
      opacity: 0,
      scale: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
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

  const showOptions = node instanceof YarnBound.OptionsResult;
  const showContinue = !(node instanceof YarnBound.OptionsResult);

  return (
    <motion.div className={styles.bubblewrap}>
      {showOptions && <DialogueOptions node={node} advance={advance} />}
      <motion.div
        layout
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className={styles.bubble}
      >
        <DialogueLine node={node} />
        {showContinue && <DialogueContinue advance={advance} />}
      </motion.div>
    </motion.div>
  );
};
