import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { getValueFromTag } from "src/helpers/helpers";
import useForceUpdate from "use-force-update";
import YarnBound, { CommandResult } from "yarn-bound";

import styles from "./dialogue.module.scss";
import { DialogueBubble } from "./DialogueBubble";
import { PixelEva, type PixelEvaEmote } from "./PixelEva";
import { PixelSam, type PixelSamEmote } from "./PixelSam";

interface DialogueTreeProps {
  dialogue: string;
}

type Speaker = "Eva" | "Sam";

export const DialogueTree = ({ dialogue }: DialogueTreeProps) => {
  const [currentSpeaker, setCurrentSpeaker] = useState<Speaker>("Eva");
  const [evaEmote, setEvaEmote] = useState<PixelEvaEmote>("neutral");
  const [samEmote, setSamEmote] = useState<PixelSamEmote>("neutral");
  const [hasDialogueEnded, setHasDialogueEnded] = useState(false);
  const [runner, setRunner] = useState<YarnBound | null>(null);

  if (dialogue) {
    setRunner(
      new YarnBound({
        dialogue,
        combineTextAndOptionsResults: true,
      })
    );
  }

  const forceUpdate = useForceUpdate();

  const handleDialogueEnd = useCallback(() => {
    setHasDialogueEnded(true);
    setEvaEmote("neutral");
    setSamEmote("neutral");
  }, []);

  const advance = useCallback(
    (optionIndex: number | undefined) => {
      if (runner?.currentResult?.isDialogueEnd) {
        handleDialogueEnd();
      }
      runner?.advance(optionIndex);
      forceUpdate();
    },
    [runner]
  );

  const node = runner?.currentResult;

  const displayDialogue =
    node !== undefined &&
    node !== null &&
    !(node instanceof CommandResult) &&
    !hasDialogueEnded;

  useEffect(() => {
    if (node === undefined || node === null || hasDialogueEnded) return;

    const { hashtags } = node;

    setCurrentSpeaker(
      node.markup.find((m) => m.name === "character")?.properties
        ?.name as Speaker
    );

    setEvaEmote(
      (getValueFromTag(hashtags, "eva") as PixelEvaEmote) ?? evaEmote
    );

    setSamEmote(
      (getValueFromTag(hashtags, "sam") as PixelSamEmote) ?? samEmote
    );
  }, [node]);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        <div className={styles.speaker} key="evaSpeaker">
          {displayDialogue && currentSpeaker === "Eva" && (
            <DialogueBubble node={node} advance={advance} key="evaBubble" />
          )}
          <PixelEva emote={evaEmote} advance={advance} />
        </div>
        <div className={styles.speaker} key="samSpeaker">
          {displayDialogue && currentSpeaker === "Sam" && (
            <DialogueBubble node={node} advance={advance} key="samBubble" />
          )}
          <PixelSam emote={samEmote} advance={advance} />
        </div>
      </AnimatePresence>
    </div>
  );
};
