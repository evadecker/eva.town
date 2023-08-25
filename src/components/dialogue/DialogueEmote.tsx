import React from "react";
import styles from "./dialogue.module.css";

interface DialogueEmoteProps {
  /**
   * Emote to display.
   */
  emote?: string;
}

export const DialogueEmote = ({ emote }: DialogueEmoteProps) => {
  const getEmote = (emote?: string) => {
    switch (emote) {
      case "uncertain":
        return "😐";
      case "scared":
        return "😳";
      case "stareyes":
        return "🤩";
      case "determined":
        return "😤";
      default:
        return "☺️";
    }
  };

  return <div className={styles.emote}>{getEmote(emote)}</div>;
};
