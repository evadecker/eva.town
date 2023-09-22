import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CommandResult, type CurrentResult, OptionsResult } from "yarn-bound";

import styles from "./dialogue.module.scss";
import { DialogueContinue } from "./DialogueContinue";
import { DialogueEmote } from "./DialogueEmote";
import { DialogueLine } from "./DialogueLine";
import { DialogueOptions } from "./DialogueOptions";

interface DialogueNodeProps {
  node: CurrentResult;
  advance: (step?: number) => void;
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  if (node == null || node instanceof CommandResult) return null;

  const bubbleVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 50,
    },
    animate: {
      width: "auto",
      height: "auto",
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

  const showOptions = node instanceof OptionsResult;
  const showContinue = !(node instanceof OptionsResult);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {showOptions && <DialogueOptions node={node} advance={advance} />}
        <motion.div
          className={styles.bubblewrap}
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
        >
          <div className={styles.bubble}>
            <DialogueLine node={node} />
            {showContinue && <DialogueContinue advance={advance} />}
          </div>
        </motion.div>
        <DialogueEmote node={node} />
      </AnimatePresence>
    </div>
  );
};
