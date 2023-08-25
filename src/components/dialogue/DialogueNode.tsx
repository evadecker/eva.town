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

  const currentEmote = getEmoteFromTag(
    hashtags?.filter((str) => str.startsWith("emote"))[0]
  );

  const showOptions = node instanceof OptionsResult;
  const showContinue = !(node instanceof OptionsResult);

  const handleClick = showContinue ? () => advance() : undefined;

  return (
    <AnimatePresence>
      <div
        className="dialogue-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        {showOptions && <DialogueOptions node={node} advance={advance} />}
        <motion.div
          className="dialogue-bubble"
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            fontSize: "18px",
            lineHeight: "22px",
            width: "340px",
            height: "72px",
          }}
          onClick={handleClick}
        >
          {/* {node.markup.find((m) => m.name === "character")?.properties?.name} */}
          <DialogueEmote emote={currentEmote} />
          <DialogueLine node={node} />
          {showContinue && <DialogueContinue advance={advance} />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
