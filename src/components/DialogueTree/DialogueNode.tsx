import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CommandResult, type CurrentResult, OptionsResult } from "yarn-bound";
import {
  DialogueLine,
  DialogueOptions,
  DialogueContinue,
  DialogueEmote,
} from ".";
import styles from "./dialogue.module.css";

interface DialogueNodeProps {
  node: CurrentResult;
  advance: (step?: number) => void;
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  if (!node || node instanceof CommandResult) return null;

  const bubbleVariants: Variants = {
    initial: {
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

  const showOptions = node instanceof OptionsResult;
  const showContinue = !(node instanceof OptionsResult);

  return (
    <div className={styles.container}>
      {showOptions && <DialogueOptions node={node} advance={advance} />}
      <AnimatePresence>
        <motion.div
          className={styles.bubble}
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
        >
          <DialogueEmote node={node} />
          <DialogueLine node={node} />
          {showContinue && <DialogueContinue advance={advance} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
