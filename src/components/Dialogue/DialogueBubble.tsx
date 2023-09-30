import classNames from "classnames";
import { motion, type Variants } from "framer-motion";

import type { Variant } from "./Dialogue";
import * as styles from "./dialogue.css";
import { DialogueLine } from "./DialogueLine";

interface DialogueBubbleProps {
  text: string;
  big?: boolean;
  variant?: Variant;
}

export const DialogueBubble = ({ text, big, variant }: DialogueBubbleProps) => {
  const bubbleVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: -20,
      y: 20,
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
    <motion.div
      layout
      variants={bubbleVariants}
      initial="initial"
      animate="animate"
      className={classNames(styles.bubble, {
        [styles.big]: big === true,
      })}
    >
      <DialogueLine text={text} variant={variant} />
    </motion.div>
  );
};