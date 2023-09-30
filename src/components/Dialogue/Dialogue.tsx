import { AnimatePresence } from "framer-motion";
import React from "react";

import * as styles from "./dialogue.css";
import { DialogueBubble } from "./DialogueBubble";
import { Emote, type EmoteType } from "./Emote";

export type Variant = "wave" | "shake" | "none";

interface DialogueProps {
  text: string;
  emote: EmoteType;
  big?: boolean;
  variant?: Variant;
}

export const Dialogue = React.memo(({ text, emote, big }: DialogueProps) => {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        <Emote emote={emote} key="emote" />
        <DialogueBubble text={text} big={big} key="bubble" />
      </AnimatePresence>
    </div>
  );
});
