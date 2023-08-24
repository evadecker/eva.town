import React from "react";

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

  return (
    <div
      className="emote"
      style={{
        background: "black",
        width: "96px",
        height: "96px",
        marginRight: "16px",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {getEmote(emote)}
    </div>
  );
};
