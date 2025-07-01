import "./dialogue.css";

import { AnimatePresence } from "motion/react";
import React from "react";

import { DialogueBubble } from "./DialogueBubble";
import { Emote, type EmoteType } from "./Emote";

interface DialogueProps {
  text: string | null;
  emote: EmoteType;
  onEmoteClick: () => void;
}

export const Dialogue = React.memo(
  ({ text, emote, onEmoteClick }: DialogueProps) => {
    return (
      <div className="dialogueContainer">
        <AnimatePresence>
          <DialogueBubble text={text} key="bubble" />
          <Emote emote={emote} key="emote" onEmoteClick={onEmoteClick} />
        </AnimatePresence>
      </div>
    );
  },
);
