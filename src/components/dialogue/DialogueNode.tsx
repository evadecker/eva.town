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

  return (
    <AnimatePresence>
      <div
        className="dialogue-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="dialogue-bubble"
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            backgroundColor: "white",
            color: "black",
            borderRadius: "20px",
            fontSize: "26px",
            lineHeight: "32px",
            padding: "16px",
            width: "400px",
          }}
          onClick={() => advance()}
        >
          {/* {node.markup.find((m) => m.name === "character")?.properties?.name} */}
          <DialogueEmote
            emote={getEmoteFromTag(
              hashtags?.filter((str) => str.startsWith("emote"))[0]
            )}
          />
          {node instanceof (TextResult || OptionsResult) && (
            <DialogueLine node={node} />
          )}
        </motion.div>
        {node instanceof OptionsResult ? (
          <DialogueOptions node={node} advance={advance} />
        ) : (
          <DialogueContinue advance={advance} />
        )}
      </div>
    </AnimatePresence>
  );
};
