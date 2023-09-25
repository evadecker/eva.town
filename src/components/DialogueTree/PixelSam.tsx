import * as styles from "./dialogue.css";

export type PixelSamEmote = "grooming" | "neutral" | "sleeping";

interface PixelSamProps {
  emote: PixelSamEmote;
  advance: (optionIndex: number | undefined) => void;
}

export const PixelSam = ({ emote, advance }: PixelSamProps) => {
  return (
    <button
      className={styles.emote}
      onClick={() => {
        advance(undefined);
      }}
      type="button"
      aria-label="Continue"
    >
      <img
        className={styles.emoteImg}
        src={`/images/dialogue/sam-${emote}.svg`}
        alt={`Sam is ${emote}`}
      />
    </button>
  );
};
