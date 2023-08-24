import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CommandResult, CurrentResult, OptionsResult } from "yarn-bound";
import React from "react";
import { DialogueLine } from "./DialogueLine";
import { DialogueOptions } from "./DialogueOptions";

interface DialogueNodeProps {
  node: CurrentResult;
  advance: (step?: number) => void;
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  if (!node || node instanceof CommandResult) return null;

  const { text } = node;

  if (text === undefined || text.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        layout
        layoutRoot
        className="dialogue-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
        }}
      >
        <motion.div
          layout
          className="dialogue-bubble"
          initial={{
            opacity: 0,
            scale: 0,
            y: 50,
            width: "auto",
            height: "auto",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            width: "auto",
            height: "auto",
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            type: "spring",
            mass: 1,
            damping: 20,
            stiffness: 200,
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <DialogueLine text={text} />
          <DialogueOptions
            options={node instanceof OptionsResult ? node : undefined}
            advance={advance}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
