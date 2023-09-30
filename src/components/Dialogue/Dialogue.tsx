import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// import { getValueFromTag } from "src/helpers/helpers";
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

export const Dialogue = ({ text, emote, big }: DialogueProps) => {
  const [currentEmote, setCurrentEmote] = useState<EmoteType>(emote);

  useEffect(() => {
    setCurrentEmote(emote);
  }, [emote]);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        <Emote emote={currentEmote} />
        <DialogueBubble text={text} big={big} />
      </AnimatePresence>
    </div>
  );
};
