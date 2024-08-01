import "./dialogue.css";

import { AnimatePresence } from "framer-motion";
import React from "react";

import { DialogueBubble } from "./DialogueBubble";
import { Emote, type EmoteType } from "./Emote";

export type Variant = "wave" | "shake" | "none";

interface DialogueProps {
  text: string | null;
  emote: EmoteType;
  big?: boolean;
  variant?: Variant;
  onEmoteClick: () => void;
}

export const Dialogue = React.memo(
  ({ text, emote, big, onEmoteClick }: DialogueProps) => {
    return (
      <div className="dialogueContainer">
        <AnimatePresence>
          <DialogueBubble text={text} big={big} key="bubble" />
          <Emote emote={emote} key="emote" onEmoteClick={onEmoteClick} />
        </AnimatePresence>
      </div>
    );
  },
);
