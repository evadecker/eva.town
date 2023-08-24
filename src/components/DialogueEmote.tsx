import React from "react";

interface DialogueEmoteProps {
  emote?: string;
}

export const DialogueEmote = ({ emote }: DialogueEmoteProps) => {
  if (!emote) return null;

  const getEmote = (emote: string) => {
    switch (emote) {
      case "uncertain":
        return "😕";
      case "scared":
        return "😨";
    }
  };

  return <div className="emote">{getEmote(emote)}</div>;
};
