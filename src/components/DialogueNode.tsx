import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  CommandResult,
  CurrentResult,
  OptionsResult,
  TextResult,
} from "yarn-bound";
import React from "react";
import { DialogueLine } from "./DialogueLine";
import { DialogueOptions } from "./DialogueOptions";
import { DialogueContinue } from "./DialogueContinue";
import { DialogueEmote } from "./DialogueEmote";

interface DialogueNodeProps {
  node: CurrentResult;
  advance: (step?: number) => void;
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  if (!node || node instanceof CommandResult) return null;

  const { text, hashtags } = node;

  const getEmoteFromTag = (tag: string) => {
    if (!tag) return;
    const emote = tag.split(":")[1];
    return emote;
  };

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
          {/* {node.markup.find((m) => m.name === "character")?.properties?.name} */}
          <DialogueEmote
            emote={getEmoteFromTag(
              hashtags?.filter((str) => str.startsWith("emote"))[0]
            )}
          />
          {node instanceof TextResult && <DialogueLine node={node} />}
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
