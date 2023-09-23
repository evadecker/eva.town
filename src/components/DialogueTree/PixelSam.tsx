import styles from "./dialogue.module.scss";

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
      aria-label="Continue"
    >
      <img src={`/images/dialogue/sam-${emote}.svg`} />
    </button>
  );
};
