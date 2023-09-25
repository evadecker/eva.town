import * as styles from "./dialogue.css";

interface DialogueContinueProps {
  advance: (optionIndex: number | undefined) => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => {
  return (
    <button
      className={styles.continueButton}
      aria-label="Continue"
      onClick={() => {
        advance(undefined);
      }}
    />
  );
};
