import * as styles from "./dialogue.css";

export type PixelEvaEmote =
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

interface PixelEvaProps {
  emote: PixelEvaEmote;
  advance: (optionIndex: number | undefined) => void;
}

export const PixelEva = ({ emote, advance }: PixelEvaProps) => {
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
        src={`/images/dialogue/eva-${emote}.svg`}
        alt={`Eva is ${emote}`}
      />
    </button>
  );
};
