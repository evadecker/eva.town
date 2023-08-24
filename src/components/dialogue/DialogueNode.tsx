import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  CommandResult,
  CurrentResult,
  OptionsResult,
  TextResult,
} from "yarn-bound";
import React from "react";
import {
  DialogueLine,
  DialogueOptions,
  DialogueContinue,
  DialogueEmote,
} from "./";

interface DialogueNodeProps {
  node: CurrentResult;
  advance: (step?: number) => void;
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  if (!node || node instanceof CommandResult) return null;

  const { hashtags } = node;

  const getEmoteFromTag = (tag: string) => {
    if (!tag) return;
    const emote = tag.split(":")[1];
    return emote;
  };

  const bubbleVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 50,
      width: "auto",
      height: "auto",
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      width: "auto",
      height: "auto",
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
    <AnimatePresence>
      <motion.div
        layout
        layoutRoot
        className="dialogue-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
        }}
      >
        {node instanceof TextResult && (
          <motion.div
            // layout
            className="dialogue-bubble"
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
              padding: "24px",
            }}
            onClick={() => advance()}
          >
            {/* {node.markup.find((m) => m.name === "character")?.properties?.name} */}
            <DialogueEmote
              emote={getEmoteFromTag(
                hashtags?.filter((str) => str.startsWith("emote"))[0]
              )}
            />
            <div>
              <DialogueLine node={node} />
            </div>
          </motion.div>
        )}
        <motion.div layout>
          {node instanceof OptionsResult ? (
            <DialogueOptions node={node} advance={advance} />
          ) : (
            <DialogueContinue advance={advance} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
