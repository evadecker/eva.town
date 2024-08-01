import "./dialogue.css";

import classNames from "classnames";
import { type Variants, motion } from "framer-motion";
import React from "react";

import type { Variant } from "./Dialogue";
import { DialogueLine } from "./DialogueLine";

interface DialogueBubbleProps {
  text: string | null;
  big?: boolean;
  variant?: Variant;
}

export const DialogueBubble = React.memo(
  ({ text, big, variant }: DialogueBubbleProps) => {
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
          className={classNames("bubble", {
            big: big === true,
          })}
        >
          <DialogueLine text={text} variant={variant} />
        </motion.div>
      )
    );
  },
);
