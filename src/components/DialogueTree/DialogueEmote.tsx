import type { OptionsResult, TextResult } from "yarn-bound";

import styles from "./dialogue.module.scss";

interface DialogueEmoteProps {
  node: TextResult | OptionsResult;
}

export const DialogueEmote = ({ node }: DialogueEmoteProps) => {
  const { hashtags } = node;

  const getEmoteFromTag = (tag: string) => {
    const emote = tag.split(":")[1];
    return emote;
  };

  const currentEmote =
    hashtags.length > 0
      ? getEmoteFromTag(hashtags.filter((str) => str.startsWith("emote"))[0])
      : "neutral";

  return (
    <img
      className={styles.emote}
      src={`/images/dialogue/eva-${currentEmote}.svg`}
    />
  );
};
