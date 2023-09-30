import * as styles from "./dialogue.css";

export type EmoteType = "grooming" | "neutral" | "sleeping";

interface EmoteProps {
  emote: EmoteType;
}

export const PixelSam = ({ emote }: EmoteProps) => {
  return (
    <img
      className={styles.emote}
      src={`/images/dialogue/sam-${emote}.svg`}
      alt={`Sam is ${emote}`}
    />
  );
};
