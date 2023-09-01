import React from "react";
import styles from "./dialogue.module.css";
import type { OptionsResult, TextResult } from "yarn-bound";

interface DialogueEmoteProps {
  node: TextResult | OptionsResult;
}

export const DialogueEmote = ({ node }: DialogueEmoteProps) => {
  const { hashtags } = node;

  const getEmoteFromTag = (tag: string) => {
    if (!tag) return;
    const emote = tag.split(":")[1];
    return emote;
  };

  const currentEmote = getEmoteFromTag(
    hashtags?.filter((str) => str.startsWith("emote"))[0]
  );

  const getEmote = (emote?: string) => {
    switch (emote) {
      case "uncertain":
        return "😐";
      case "flushed":
        return "😳";
      case "stareyes":
        return "🤩";
      case "determined":
        return "😤";
      case "unamused":
        return "😒";
      case "thinking":
        return "🤔";
      default:
        return "☺️";
    }
  };

  return <div className={styles.emote}>{getEmote(currentEmote)}</div>;
};
