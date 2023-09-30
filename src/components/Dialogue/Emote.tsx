import * as styles from "./dialogue.css";

export type EmoteType =
  | "drooling"
  | "flushed"
  | "happy"
  | "mischief"
  | "neutral"
  | "playful"
  | "sob"
  | "starstruck"
  | "thinking"
  | "tired"
  | "unamused";

interface EmoteProps {
  emote: EmoteType;
}

export const Emote = ({ emote }: EmoteProps) => {
  return (
    <img
      className={styles.emote}
      src={`/images/dialogue/eva-${emote}.svg`}
      alt={`Eva is ${emote}`}
    />
  );
};
